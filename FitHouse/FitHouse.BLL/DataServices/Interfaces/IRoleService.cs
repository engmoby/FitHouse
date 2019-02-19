using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface IRoleService : IService<Role>
    {
         PagedResultsDto GetAllRoles(int page, int pageSize);
        PagedResultsDto GetAllActivateRoles(int page, int pageSize);
    }
}
