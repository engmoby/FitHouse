using FitHouse.BLL.DTOs;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface IPermissionFacade
    { 
        PermissionDto GetPermission(long userId); 
        PermissionDto CreatePermission(PermissionDto userDto); 
        PermissionDto EditPermission(PermissionDto userDto);
        PagedResultsDto GetAllPermissions(int page, int pageSize); 
    }
}
