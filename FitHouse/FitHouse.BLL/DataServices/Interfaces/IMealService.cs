using System.Collections.Generic;
using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface IMealservice : IService<Meal>
    {
        PagedResultsDto GetAllMeals(string language,  int page, int pageSize);
        //List<Meal> GetAllMealsByRestuantId(long restuantId);
        //PagedResultsDto GetlatestMealsByRestuantId(long restuantId, int page, int pageSize);
    }
}
