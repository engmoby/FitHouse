using System.Collections.Generic;
using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface IRolePermissionService : IService<RolePermission>
    {
        List<RolePermissionDto> GetRolePermissionById(long roleId);
    }
}
