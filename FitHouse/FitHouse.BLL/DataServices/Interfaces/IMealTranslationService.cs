using System.Collections.Generic;
using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface IMealTranslationService:IService<MealTranslation>
    {
        bool CheckMealNameExist(string mealName, string language, long mealId);
        PagedResultsDto GetAllMeals(string language, int page, int pageSize); 
        PagedResultsDto GetActivatedMeals(string language,  int page, int pageSize);
    }
}
