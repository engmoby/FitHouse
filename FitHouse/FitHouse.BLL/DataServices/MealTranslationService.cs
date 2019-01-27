using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace FitHouse.BLL.DataServices
{
    public class MealTranslationService : Service<MealTranslation>, IMealTranslationService
    {
        public MealTranslationService(IRepositoryAsync<MealTranslation> repository) : base(repository)
        {

        }
        public bool CheckMealNameExist(string MealName, string language, long MealId)
        {
            return Queryable()
                .Any(x => x.Language.ToLower() == language.ToLower() &&
                          x.Title.ToLower() == MealName.ToLower() &&
                          x.MealId != MealId && !x.Meal.IsDeleted);
        }

        public PagedResultsDto GetAllMeals(string language, int page, int pageSize)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Meal.IsDeleted && x.Language.ToLower() == language.ToLower()).Select(x => x.Meal).Count(x => !x.IsDeleted);
            List<Meal> Meals;
            if (pageSize > 0)
                Meals = _repository.Query(x => !x.Meal.IsDeleted && x.Language.ToLower() == language.ToLower()).Select(x => x.Meal)
                    .OrderBy(x => x.MealId).Skip((page - 1) * pageSize)
                    .Take(pageSize).ToList();
            else
                Meals = _repository.Query(x => !x.Meal.IsDeleted && x.Language.ToLower() == language.ToLower()).Select(x => x.Meal)
                    .OrderBy(x => x.MealId).ToList();
            results.Data = Mapper.Map<List<Meal>, List<MealDto>>(Meals);
            return results;
        }
        public PagedResultsDto GetActivatedMeals(string language, int page, int pageSize)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Meal.IsDeleted && x.Meal.IsActive && x.Language.ToLower() == language.ToLower()  ).Select(x => x.Meal).Count(x => !x.IsDeleted);
            List<Meal> Meals;
            if (pageSize > 0)
                Meals = _repository.Query(x => !x.Meal.IsDeleted && x.Meal.IsActive && x.Language.ToLower() == language.ToLower()  ).Select(x => x.Meal)
                    .OrderBy(x => x.MealId).Skip((page - 1) * pageSize)
                    .Take(pageSize).ToList();
            else
                Meals = _repository.Query(x => !x.Meal.IsDeleted && x.Meal.IsActive && x.Language.ToLower() == language.ToLower()  ).Select(x => x.Meal)
                    .OrderBy(x => x.MealId).ToList();
            results.Data = Mapper.Map<List<Meal>, List<MealDto>>(Meals);
            return results;
        }
    }
}
