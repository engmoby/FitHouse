using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;
using FitHouse.BLL.Services.ManageStorage;
using FitHouse.Common;
using FitHouse.Common.CustomException;
using FitHouse.DAL.Entities.Model;
using Microsoft.Practices.ObjectBuilder2;
using Repository.Pattern.UnitOfWork;

namespace FitHouse.BLL.Services
{
    public class MealFacade : BaseFacade, IMealFacade
    {
        private readonly ICategoryService _categoryService;
        private readonly IMealservice _Mealservice;
        private readonly IMealTranslationService _MealTranslationService;
        private readonly IMealDetailsService _mealDetailsService;
        private readonly IManageStorage _manageStorage;
        private IProgramDetailService _programDetailService;
        public MealFacade(ICategoryService categoryService, IMealservice Mealservice, IMealTranslationService MealTranslationService, IManageStorage manageStorage,
             IUnitOfWorkAsync unitOfWork, IProgramDetailService programDetailService, IMealDetailsService mealDetailsService) : base(unitOfWork)
        {
            _categoryService = categoryService;
            _Mealservice = Mealservice;
            _MealTranslationService = MealTranslationService;
            _manageStorage = manageStorage;
            _programDetailService = programDetailService;
            _mealDetailsService = mealDetailsService;
        }

        public MealFacade(ICategoryService categoryService, IMealservice Mealservice, IMealTranslationService MealTranslationService, IManageStorage manageStorage,
               IProgramDetailService programDetailService, IMealDetailsService mealDetailsService)
        {
            _categoryService = categoryService;
            _Mealservice = Mealservice;
            _MealTranslationService = MealTranslationService;
            _manageStorage = manageStorage;
            _programDetailService = programDetailService;
            _mealDetailsService = mealDetailsService;
        }


        public void AddMeal(MealDto MealDto, string path)
        {
            var category = _categoryService.Find(MealDto.CategoryId);
            if (category == null) throw new NotFoundException(ErrorCodes.CategoryNotFound);
            if (category.IsDeleted) throw new ValidationException(ErrorCodes.CategoryDeleted);
            ValidateMeal(MealDto);
            var Meal = Mapper.Map<Meal>(MealDto);
            foreach (var MealName in MealDto.MealNameDictionary)
            {
                Meal.MealTranslations.Add(new MealTranslation
                {
                    Title = MealName.Value,
                    Description = MealDto.MealDescriptionDictionary[MealName.Key],
                    Language = MealName.Key.ToLower()
                });
            }
            Meal.MealDetails
                .ForEach(x => _mealDetailsService.Insert(x));
            _MealTranslationService.InsertRange(Meal.MealTranslations);
            _Mealservice.Insert(Meal);

            SaveChanges();
            if (MealDto.Image != null)
            {
                _manageStorage.UploadImage(path + "Meals", MealDto.Image, Meal.MealId + "-1");
            }
        }

        public MealDto GetMeal(long MealId, string language)
        {
            var Meal = _Mealservice.Find(MealId);
            if (Meal == null) throw new NotFoundException(ErrorCodes.MealNotFound);
            if (Meal.IsDeleted) throw new NotFoundException(ErrorCodes.MealDeleted);
            var MealDto = Mapper.Map<MealDto>(Meal);
            var MealTranslation = Meal.MealTranslations.FirstOrDefault(x => x.Language.ToLower() == language.ToLower());
            MealDto.MealName = MealTranslation.Title;
            MealDto.MealDescription = MealTranslation.Description;
            return MealDto;
        }

        private void ValidateMeal(MealDto MealDto)
        {
            foreach (var MealName in MealDto.MealNameDictionary)
            {
                if (string.IsNullOrEmpty(MealName.Value))
                    throw new ValidationException(ErrorCodes.EmptyMealName);
                if (string.IsNullOrEmpty(MealDto.MealDescriptionDictionary[MealName.Key]))
                    throw new ValidationException(ErrorCodes.EmptyMealDescription);
                if (MealName.Value.Length > 100)
                    throw new ValidationException(ErrorCodes.MealNameExceedLength);
                if (_MealTranslationService.CheckMealNameExist(MealName.Value, MealName.Key, MealDto.MealId)) throw new ValidationException(ErrorCodes.MealNameAlreadyExist);
            }
        }

        public PagedResultsDto GetAllMeals(string language, int page, int pageSize)
        {
            var results = _MealTranslationService.GetAllMeals(language, page, pageSize);
            return results;
        }

        public PagedResultsDto GetActivatedMealsByCategoryId(string language, long categoryId, int page, int pageSize)
        {
            var category = _categoryService.Find(categoryId);
            if (category == null) throw new NotFoundException(ErrorCodes.CategoryNotFound);
            if (category.IsDeleted) throw new ValidationException(ErrorCodes.CategoryDeleted);
            var results = _MealTranslationService.GetActivatedMeals(language, page, pageSize);
            return results;
        }

        public void ActivateMeal(long MealId)
        {
            var Meal = _Mealservice.Find(MealId);
            if (Meal == null) throw new NotFoundException(ErrorCodes.MenuNotFound);
            if (Strings.SupportedLanguages.Any(x => !Meal.MealTranslations.Select(m => m.Language.ToLower())
                .Contains(x.ToLower())))
                throw new ValidationException(ErrorCodes.MealIsNotTranslated);
            Meal.IsActive = true;
            _Mealservice.Update(Meal);


            SaveChanges();
        }

        public void DeActivateMeal(long MealId)
        {
            var Meal = _Mealservice.Find(MealId);
            if (Meal == null) throw new NotFoundException(ErrorCodes.CategoryNotFound);

            Meal.IsActive = false;

            if (!Meal.IsActive)
            {
                //var checkIfUsed = _programDetailService.Queryable().Where(x => x.MealId == Meal.MealId);
                //if (checkIfUsed.Any())
                //{
                //    throw new ValidationException(ErrorCodes.RecordIsUsedInAnotherModule);
                //}
            }


            _Mealservice.Update(Meal);
            SaveChanges();
        }

        public void DeleteMeal(long MealId)
        {
            var Meal = _Mealservice.Find(MealId);
            if (Meal == null) throw new NotFoundException(ErrorCodes.MealNotFound);
            Meal.IsDeleted = true;

            if (Meal.IsDeleted)
            {
                //var checkIfUsed = _programDetailService.Queryable().Where(x => x.MealId == Meal.MealId);
                //if (checkIfUsed.Any())
                //{
                //    throw new ValidationException(ErrorCodes.RecordIsUsedInAnotherModule);
                //}
            }

            Meal.IsActive = false;
            _Mealservice.Update(Meal);
            SaveChanges();
        }

        public void UpdateMeal(MealDto MealDto, string path)
        {
            var Meal = _Mealservice.Find(MealDto.MealId);
            if (Meal == null) throw new NotFoundException(ErrorCodes.MealNotFound);
            ValidateMeal(MealDto);

            foreach (var MealName in MealDto.MealNameDictionary)
            {
                var mealTranslation =
                    Meal.MealTranslations.FirstOrDefault(x => x.Language.ToLower() == MealName.Key.ToLower());
                if (mealTranslation == null)
                {
                    Meal.MealTranslations.Add(new MealTranslation
                    {
                        Language = MealName.Key.ToLower(),
                        Title = MealName.Value,
                        Description = MealDto.MealDescriptionDictionary[MealName.Key]
                    });
                }
                else
                {
                    mealTranslation.Title = MealName.Value;
                    mealTranslation.Description = MealDto.MealDescriptionDictionary[MealName.Key];
                }
            }
            //Meal.Calories = MealDto.Calories;
            //Meal.Mealsize = MealDto.Mealsize;
            //Meal.Protein = MealDto.Protein;
            //Meal.Carbs = MealDto.Carbs;
            //Meal.Cost = MealDto.Cost;
            //Meal.VAT = MealDto.VAT;
            //Meal.Price = MealDto.Price;
            //Meal.TotalPrice = MealDto.TotalPrice;
            _Mealservice.Update(Meal);
            SaveChanges();
            if (MealDto.IsImageChange)
                _manageStorage.UploadImage(path + "\\" + "Meals", MealDto.Image, Meal.MealId + "-1");

        }

        public void TranslateMeal(MealDto MealDto, string language)
        {
            ValidateTranslateMeal(MealDto, language);
            var Meal = _Mealservice.Find(MealDto.MealId);
            if (Meal == null) throw new NotFoundException(ErrorCodes.MealNotFound);
            var MealTranslation = Meal.MealTranslations.FirstOrDefault(x => x.Language.ToLower() == language.ToLower());
            if (MealTranslation == null)
            {
                Meal.MealTranslations.Add(new MealTranslation
                {
                    Language = language,
                    Title = MealDto.MealName,
                    Description = MealDto.MealDescription
                });
            }
            else
            {
                MealTranslation.Title = MealDto.MealName;
                MealTranslation.Description = MealDto.MealDescription;
            }

            _Mealservice.Update(Meal);
            SaveChanges();
        }
        private void ValidateTranslateMeal(MealDto MealDto, string language)
        {
            if (string.IsNullOrEmpty(MealDto.MealName))
                throw new ValidationException(ErrorCodes.EmptyMealName);
            if (string.IsNullOrEmpty(MealDto.MealDescription))
                throw new ValidationException(ErrorCodes.EmptyMealDescription);
            if (MealDto.MealName.Length > 100)
                throw new ValidationException(ErrorCodes.MealNameExceedLength);
            if (_MealTranslationService.CheckMealNameExist(MealDto.MealName, language, MealDto.MealId))
                throw new ValidationException(ErrorCodes.MealNameAlreadyExist);
        }
    }
}
