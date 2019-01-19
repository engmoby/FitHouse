using System.Collections.Generic;
using System.Web.Http;
using AutoMapper;
using FitHouse.API.Infrastructure;
using FitHouse.API.Models;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;

namespace FitHouse.API.Controllers
{
    public class PermissionController : BaseApiController
    { 
        private readonly IPermissionFacade _permissionFacade;
        public PermissionController(IPermissionFacade permissionFacade)
        {
            _permissionFacade = permissionFacade; 
        }

        [Route("api/Permissions/GetAllPermissions", Name = "GetAllPermissions")]
        [HttpGet]
        public IHttpActionResult GetAllPermissions(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto PermissionObj = _permissionFacade.GetAllPermissions(page, pagesize);
            var data = Mapper.Map<List<PermissionModel>>(PermissionObj.Data);
            return PagedResponse("GetAllPermissions", page, pagesize, PermissionObj.TotalCount, data, PermissionObj.IsParentTranslated);
        }


        [Route("api/Permissions", Name = "CreatePermission")]
        [HttpPost]
        public IHttpActionResult CreatePermission([FromBody] PermissionModel PermissionModel)
        {
            var reurnPermission = _permissionFacade.CreatePermission(Mapper.Map<PermissionDto>(PermissionModel));

            return Ok(reurnPermission);
        }


        [Route("api/Permissions/EditPermission", Name = "EditPermission")]
        [HttpPost]
        public IHttpActionResult EditPermission([FromBody] PermissionModel PermissionModel)
        {
            var reurnPermission = _permissionFacade.EditPermission(Mapper.Map<PermissionDto>(PermissionModel));

            return Ok(reurnPermission);
        }


        [Route("api/Permissions/GetPermissionById", Name = "GetPermissionById")]
        [HttpGet]
        public IHttpActionResult GetPermissionById(long PermissionId)
        {
            var reurnPermission = _permissionFacade.GetPermission(PermissionId);
            return Ok(reurnPermission);
        }
    }

}