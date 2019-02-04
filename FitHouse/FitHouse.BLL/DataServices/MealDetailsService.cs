using System.Collections.Generic;
using System.Linq;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace FitHouse.BLL.DataServices
{
    public class MealDetailsService : Service<MealDetail>, IMealDetailsService
    {
        public MealDetailsService(IRepositoryAsync<MealDetail> repository) : base(repository)
        {
            _repository = repository;
        }

        public List<MealDetail> GetMealItems(long mealId)
        {
            var mealDetails = _repository.Query(x => x.MealId == mealId && x.IsDeleted != true).Select().ToList();
            return mealDetails;
        }
 }
}