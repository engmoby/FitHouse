using System.Collections.Generic;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface IMealDetailsService : IService<MealDetail>
    {
        List<MealDetail> GetMealItems(long mealId);
    }
}
