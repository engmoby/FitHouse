using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface IPermissionService : IService<Permission>
    {
         PagedResultsDto GetAllPermissions(int page, int pageSize);
    }
}
