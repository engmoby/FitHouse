using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace FitHouse.BLL.DataServices
{
    public class UserRoleService : Service<UserRole>, IUserRoleService
    {
        public UserRoleService(IRepositoryAsync<UserRole> repository) : base(repository)
        {
            _repository = repository;
        }

        public List<UserRoleDto> GetUserRoleById(long userId,int tenantId)
        {
            var userRoles = _repository.Query(x => x.UserId == userId && x.TenantId== tenantId).Select().ToList();

            var userRoleDto = new List<UserRoleDto>();
            foreach (var user in userRoles)
            {
                userRoleDto.Add(new UserRoleDto
                {
                    RoleId = user.RoleId,
                    UserId = user.UserId,
                });
            }
           // var results = Mapper.Map<List<UserRole>, List<UserRoleDto>>(userRoles);
            var results = userRoleDto;
            return results;
        }

    }
}
