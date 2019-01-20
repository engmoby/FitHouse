using System.Collections.Generic;
using System.Web.Http;
using AutoMapper;
using FitHouse.API.Infrastructure;
using FitHouse.API.Models;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces; 

namespace FitHouse.API.Controllers
{
    public class RoleController : BaseApiController
    { 
        private readonly IRoleFacade _roleFacade;
        private readonly IRolePermissionService _rolePermissionService;
        public RoleController(IRoleFacade roleFacade)
        {
            _roleFacade = roleFacade; 
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