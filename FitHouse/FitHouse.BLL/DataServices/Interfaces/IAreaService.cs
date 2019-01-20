using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface IAreaService : IService<Area>
    {
         PagedResultsDto GetAllAreas(long cityId,int page, int pageSize);
    }
}
