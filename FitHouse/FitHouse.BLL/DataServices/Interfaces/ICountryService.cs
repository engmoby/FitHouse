using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface ICountryService:IService<Country>
    {
        PagedResultsDto GetAllCountries(int page, int pageSize, int tenantId);
    }
}
