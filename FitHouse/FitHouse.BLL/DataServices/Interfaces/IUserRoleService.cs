using System.Collections.Generic;
using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface IUserRoleService : IService<UserRole>
    {
        List<UserRoleDto> GetUserRoleById(long roleId);
    }
}
