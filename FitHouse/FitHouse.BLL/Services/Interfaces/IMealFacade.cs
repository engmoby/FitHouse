using System.Collections.Generic;
using FitHouse.BLL.DTOs;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface IMealFacade
    {
        void AddMeal(MealDto MealDto, string path);
        MealDto GetMeal(long MealId, string language);
        PagedResultsDto GetAllMeals(string language,   int page, int pageSize);
        void DeleteMeal(long MealId);
        void UpdateMeal(MealDto MealDto, string path); 
       // void TranslateMeal(MealDto MealDto, string language);
        void ActivateMeal(long MealId);
        void DeActivateMeal(long MealId);
        List<ItemProgramDto> GetMealItems(long mealId);
        PagedResultsDto GetActivatedMealsByCategoryId(string language, long categoryId, int page, int pageSize);  
    }
}
