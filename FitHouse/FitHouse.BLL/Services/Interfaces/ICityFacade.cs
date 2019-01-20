using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitHouse.BLL.DTOs;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface ICityFacade
    {
        CityDto GetCity(long cityId);
        CityDto CreateCity(CityDto cityDto, int userId);
        CityDto EditCity(CityDto cityDto, int userId);
        PagedResultsDto GetAllCities(long regionId, int page, int pageSize);
        PagedResultsDto GetAllCitiesForUser(long userId);
    }
}
