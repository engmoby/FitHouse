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
    public class Mealservice : Service<Meal>, IMealservice
    {
        public Mealservice(IRepositoryAsync<Meal> repository) : base(repository)
        {

        }
        public PagedResultsDto GetAllMeals(string language,   int page, int pageSize)
        {
            var query = Queryable();
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();
            var getList = query.OrderBy(x => x.MealId).Skip((page - 1) * pageSize).Take(pageSize).ToList();
            results.Data = Mapper.Map<List<Meal>, List<MealTranslation>>(getList, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {
                        foreach (Meal menu in src)
                        {
                            menu.MealTranslations = menu.MealTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();
                        }

                    }
                );
            });
            return results;
        }

        //public PagedResultsDto GetlatestMealsByRestuantId(long restuantId, int page, int pageSize)
        //{
        //    var query = Queryable().Where(x => x.Category.RestaurantId == restuantId);

        //    PagedResultsDto results = new PagedResultsDto();
        //    results.TotalCount = query.Select(x => x).Count();
        //    var getList = query.OrderBy(x => x.MealId).Skip((page - 1) * pageSize).Take(pageSize).ToList();
        //    results.Data = getList;
        //    return results;
        //}

        //public List<Meal> GetAllMealsByRestuantId(long restuantId)
        //{
        //    var query = Queryable().Where(x => x.Category.RestaurantId == restuantId && !x.IsDeleted);

        //    return query.ToList();
        //}
    }
}
