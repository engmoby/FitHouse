using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitHouse.BLL.DTOs;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface ICountryFacade
    {
        CountryDto GetCountry(long countryId);
        CountryDto CreateCountry(CountryDto countryDto, int userId);
        CountryDto EditCountry(CountryDto countryDto, int userId);
        PagedResultsDto GetAllCountries(int page, int pageSize);
    }
}
