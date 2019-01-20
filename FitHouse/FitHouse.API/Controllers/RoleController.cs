using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Results;
using AutoMapper;
using FitHouse.API.Infrastructure;
using FitHouse.API.Models;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;
using FitHouse.Common.CustomException;

namespace FitHouse.API.Controllers
{
    public class RoleController : BaseApiController
    {
        private readonly IRoleFacade _roleFacade;
        private readonly IRolePermissionService _rolePermissionService;
        private readonly IUserRoleService _userRoleService;
        public RoleController(IRoleFacade roleFacade, IUserRoleService userRoleService)
        {
            _roleFacade = roleFacade;
            _userRoleService = userRoleService;
        }

        [Route("api/Roles/GetAllRoles", Name = "GetAllRoles")]
        [HttpGet]
        public IHttpActionResult GetAllRoles(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto roleObj = _roleFacade.GetAllRoles(page, pagesize);
            var data = Mapper.Map<List<RoleModel>>(roleObj.Data);
            return PagedResponse("GetAllRoles", page, pagesize, roleObj.TotalCount, data, roleObj.IsParentTranslated);
        }


        [Route("api/Roles", Name = "CreateRole")]
        [HttpPost]
        public IHttpActionResult CreateRole([FromBody] RoleModel roleModel)
        {

            var reurnRole = _roleFacade.CreateRole(Mapper.Map<RoleDto>(roleModel), UserId);

            return Ok(reurnRole);
        }


        [Route("api/Roles/EditRole", Name = "EditRole")]
        [HttpPost]
        public IHttpActionResult EditRole([FromBody] RoleModel roleModel)
        {
            if (!roleModel.IsActive || roleModel.IsDeleted)
            {
                var checkIfUsed = _userRoleService.Queryable().Where(x => x.RoleId == roleModel.RoleId);
                if (checkIfUsed.Any())
                {
                    throw new ValidationException(ErrorCodes.RecordIsUsedInAnotherModule); 
                }
            }

            var reurnRole = _roleFacade.EditRole(Mapper.Map<RoleDto>(roleModel), UserId);

            return Ok(reurnRole);
        }


        [Route("api/Roles/GetRoleById", Name = "GetRoleById")]
        [HttpGet]
        public IHttpActionResult GetRoleById(long roleId)
        {
            var reurnRole = _roleFacade.GetRole(roleId);
            return Ok(reurnRole);
        }
    }

}