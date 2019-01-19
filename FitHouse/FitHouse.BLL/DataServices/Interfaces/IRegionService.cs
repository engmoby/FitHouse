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
    public interface IRegionService:IService<Region>
    {
        PagedResultsDto GetAllRegions(long countryId,int page, int pageSize, int tenantId);
    }
}
