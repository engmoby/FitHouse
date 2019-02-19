using FitHouse.BLL.DTOs;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface IRoleFacade
    { 
        RoleDto GetRole(long userId);
        RoleDto CreateRole(RoleDto userDto, int userId);
        RoleDto EditRole(RoleDto userDto, int userId);
        PagedResultsDto GetAllRoles(int page, int pageSize, long userId);
        PagedResultsDto GetAllActivateRoles(int page, int pageSize, long userId);
    }
}
