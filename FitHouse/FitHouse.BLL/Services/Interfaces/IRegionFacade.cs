using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitHouse.BLL.DTOs;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface IRegionFacade
    {
        RegionDto GetRegion(long regionId);
        RegionDto CreateRegion(RegionDto regionDto, int userId);
        RegionDto EditRegion(RegionDto regionDto, int userId);
        PagedResultsDto GetAllRegions(long countryId, int page, int pageSize);
        PagedResultsDto GetAllRegionsForUser(long userId);
    }
}
