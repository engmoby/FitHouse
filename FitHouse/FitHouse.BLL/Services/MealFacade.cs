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
        private readonly IMealTranslationService _mealTranslationService;
        private readonly IMealDetailsService _mealDetailsService;
        private readonly IManageStorage _manageStorage;
        private readonly IOrderDetailsService _orderDetailsService;
        private readonly IItemService _itemService;
        public MealFacade(ICategoryService categoryService, IItemService itemService, IMealservice mealservice, IMealTranslationService mealTranslationService, IManageStorage manageStorage,
             IUnitOfWorkAsync unitOfWork, IMealDetailsService mealDetailsService, IOrderDetailsService orderDetailsService) : base(unitOfWork)
        {
            _categoryService = categoryService;
            _Mealservice = mealservice;
            _mealTranslationService = mealTranslationService;
            _manageStorage = manageStorage;
            _mealDetailsService = mealDetailsService;
            _orderDetailsService = orderDetailsService;
            _itemService = itemService;
        }

        public MealFacade(ICategoryService categoryService, IMealservice Mealservice, IMealTranslationService MealTranslationService, IManageStorage manageStorage, IMealDetailsService mealDetailsService, IOrderDetailsService orderDetailsService)
        {
            _categoryService = categoryService;
            _Mealservice = Mealservice;
            _mealTranslationService = MealTranslationService;
            _manageStorage = manageStorage;
            _mealDetailsService = mealDetailsService;
            _orderDetailsService = orderDetailsService;
        }


        public void AddMeal(MealDto MealDto, string path)
        {
            //var category = _categoryService.Find(MealDto.CategoryId);
            //if (category == null) throw new NotFoundException(ErrorCodes.CategoryNotFound);
            //if (category.IsDeleted) throw new ValidationException(ErrorCodes.CategoryDeleted);
            ValidateMeal(MealDto);
            var meal = Mapper.Map<Meal>(MealDto);
            foreach (var mealName in MealDto.MealNameDictionary)
            {
                meal.MealTranslations.Add(new MealTranslation
                {
                    Title = mealName.Value,
                    Description = MealDto.MealDescriptionDictionary[mealName.Key],
                    Language = mealName.Key.ToLower()
                });
            }
            //foreach (var roleper in MealDto.MealDetails)
            //{

            //    meal.MealDetails.Add(new MealDetail
            //    {
            //        ItemId = roleper.ItemId
            //    });
            //}
            
            _mealDetailsService.InsertRange(meal.MealDetails);
            _mealTranslationService.InsertRange(meal.MealTranslations);
            _Mealservice.Insert(meal);

            SaveChanges();
            if (MealDto.Image != null)
            {
                _manageStorage.UploadImage(path + "Meals", MealDto.Image, meal.MealId + "-1");
            }
        }

        public MealDto GetMeal(long mealId, string language)
        {
            var meal = _Mealservice.Query(x => x.MealId == mealId).Include(d => d.MealDetails).Select().FirstOrDefault();
            if (meal == null) throw new NotFoundException(ErrorCodes.MealNotFound);
            if (meal.IsDeleted) throw new NotFoundException(ErrorCodes.MealDeleted);
            var mealDto = Mapper.Map<MealDto>(meal);
            //  var MealTranslation = Meal.MealTranslations.FirstOrDefault(x => x.Language.ToLower() == language.ToLower());
            //MealDto.MealName = MealTranslation.Title;
            //MealDto.MealDescription = MealTranslation.Description;
            return mealDto;
        }

        public List<ItemProgramDto> GetMealItems(long mealId)
        {
            var mealDetails = _mealDetailsService.GetMealItems(mealId);
            if (mealDetails == null) throw new NotFoundException(ErrorCodes.MealHasNoItems);

            var items = new List<ItemProgramDto>();
            foreach (var detail in mealDetails)
            {
                var item = Mapper.Map<ItemProgramDto>(_itemService.GetItemById(detail.ItemId));
                if (item == null) throw new NotFoundException(ErrorCodes.ItemNotFound);
                items.Add(item);
            }

            return items;
        }

        private void ValidateMeal(MealDto mealDto)
        {
            foreach (var mealName in mealDto.MealNameDictionary)
            {
                if (string.IsNullOrEmpty(mealName.Value))
                    throw new ValidationException(ErrorCodes.EmptyMealName);
                if (string.IsNullOrEmpty(mealDto.MealDescriptionDictionary[mealName.Key]))
                    throw new ValidationException(ErrorCodes.EmptyMealDescription);
                if (mealName.Value.Length > 100)
                    throw new ValidationException(ErrorCodes.MealNameExceedLength);
                if (_mealTranslationService.CheckMealNameExist(mealName.Value, mealName.Key, mealDto.MealId)) throw new ValidationException(ErrorCodes.MealNameAlreadyExist);
            }
        }

        public PagedResultsDto GetAllMeals(string language, int page, int pageSize)
        {
            var results = _mealTranslationService.GetAllMeals(language, page, pageSize);
            return results;
        }

        public PagedResultsDto GetActivatedMealsByCategoryId(string language, long categoryId, int page, int pageSize)
        {
            var category = _categoryService.Find(categoryId);
            if (category == null) throw new NotFoundException(ErrorCodes.CategoryNotFound);
            if (category.IsDeleted) throw new ValidationException(ErrorCodes.CategoryDeleted);
            var results = _mealTranslationService.GetActivatedMeals(language, page, pageSize);
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
                var checkIfUsed = _orderDetailsService.Queryable().Where(x => x.MealId == Meal.MealId);
                if (checkIfUsed.Any())
                {
                    throw new ValidationException(ErrorCodes.RecordIsUsedInAnotherModule);
                }
            }


            _Mealservice.Update(Meal);
            SaveChanges();
        }

        public void DeleteMeal(long mealId)
        {
            var meal = _Mealservice.Find(mealId);
            if (meal == null) throw new NotFoundException(ErrorCodes.MealNotFound);
            meal.IsDeleted = true;

            if (meal.IsDeleted)
            {
                //var checkIfUsed = _programDetailService.Queryable().Where(x => x.MealId == Meal.MealId);
                //if (checkIfUsed.Any())
                //{
                //    throw new ValidationException(ErrorCodes.RecordIsUsedInAnotherModule);
                //}
            }

            meal.IsActive = false;
            _Mealservice.Update(meal);
            SaveChanges();
        }

        public void UpdateMeal(MealDto mealDto, string path)
        {
            var meal = _Mealservice.Find(mealDto.MealId);
            if (meal == null) throw new NotFoundException(ErrorCodes.MealNotFound);
            ValidateMeal(mealDto);

            foreach (var mealName in mealDto.MealNameDictionary)
            {
                var mealTranslation =
                    meal.MealTranslations.FirstOrDefault(x => x.Language.ToLower() == mealName.Key.ToLower());
                if (mealTranslation == null)
                {
                    meal.MealTranslations.Add(new MealTranslation
                    {
                        Language = mealName.Key.ToLower(),
                        Title = mealName.Value,
                        Description = mealDto.MealDescriptionDictionary[mealName.Key]
                    });
                }
                else
                {
                    mealTranslation.Title = mealName.Value;
                    mealTranslation.Description = mealDto.MealDescriptionDictionary[mealName.Key];
                }
            }
            var deletePermissions = new MealDetail[meal.MealDetails.Count];
            meal.MealDetails.CopyTo(deletePermissions, 0);

            foreach (var mealRolePermission in deletePermissions)
            {
                _mealDetailsService.Delete(mealRolePermission);

            }
            foreach (var roleper in mealDto.MealDetails)
            {
                meal.MealDetails.Add(new MealDetail
                {
                    ItemId = roleper.ItemId
                });
            }
            meal.MealDiscount = mealDto.MealDiscount;
            meal.MealPrice = mealDto.MealPrice;
            _Mealservice.Update(meal);
            SaveChanges();
            if (mealDto.IsImageChange)
                _manageStorage.UploadImage(path + "\\" + "Meals", mealDto.Image, meal.MealId + "-1");

        }

        //public void TranslateMeal(MealDto MealDto, string language)
        //{
        //    ValidateTranslateMeal(MealDto, language);
        //    var Meal = _Mealservice.Find(MealDto.MealId);
        //    if (Meal == null) throw new NotFoundException(ErrorCodes.MealNotFound);
        //    var MealTranslation = Meal.MealTranslations.FirstOrDefault(x => x.Language.ToLower() == language.ToLower());
        //    if (MealTranslation == null)
        //    {
        //        Meal.MealTranslations.Add(new MealTranslation
        //        {
        //            Language = language,
        //            Title = MealDto.MealName,
        //            Description = MealDto.MealDescription
        //        });
        //    }
        //    else
        //    {
        //        MealTranslation.Title = MealDto.MealName;
        //        MealTranslation.Description = MealDto.MealDescription;
        //    }

        //    _Mealservice.Update(Meal);
        //    SaveChanges();
        //}
        //private void ValidateTranslateMeal(MealDto MealDto, string language)
        //{
        //    if (string.IsNullOrEmpty(MealDto.MealName))
        //        throw new ValidationException(ErrorCodes.EmptyMealName);
        //    if (string.IsNullOrEmpty(MealDto.MealDescription))
        //        throw new ValidationException(ErrorCodes.EmptyMealDescription);
        //    if (MealDto.MealName.Length > 100)
        //        throw new ValidationException(ErrorCodes.MealNameExceedLength);
        //    if (_mealTranslationService.CheckMealNameExist(MealDto.MealName, language, MealDto.MealId))
        //        throw new ValidationException(ErrorCodes.MealNameAlreadyExist);
        //}
    }
}
