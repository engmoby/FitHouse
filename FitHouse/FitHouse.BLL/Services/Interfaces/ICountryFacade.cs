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
        CountryDto GetCountry(long countryId, int tenantId);
        CountryDto CreateCountry(CountryDto countryDto, int userId, int tenantId);
        CountryDto EditCountry(CountryDto countryDto, int userId, int tenantId);
        PagedResultsDto GetAllCountries(int page, int pageSize, int tenantId);
    }
}
