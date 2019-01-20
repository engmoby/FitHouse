using System.Collections.Generic;
using System.Web.Http;
using AutoMapper;
using FitHouse.API.Infrastructure;
using FitHouse.API.Models;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;

namespace FitHouse.API.Controllers
{
    public class AreaController : BaseApiController
    { 
        private readonly IAreaFacade _areaFacade;
        public AreaController(IAreaFacade areaFacade)
        {
            _areaFacade = areaFacade; 
        }

        [Route("api/Cities/{cityId:long}/Areas/GetAllAreas", Name = "GetAllAreas")]
        [HttpGet]
        public IHttpActionResult GetAllAreas(long cityId, int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto areaObj = _areaFacade.GetAllAreas(cityId,page, pagesize);
            var data = Mapper.Map<List<AreaModel>>(areaObj.Data);
            return PagedResponse("GetAllAreas", page, pagesize, areaObj.TotalCount, data, areaObj.IsParentTranslated);
        }


        [Route("api/Areas", Name = "CreateArea")]
        [HttpPost]
        public IHttpActionResult CreateArea([FromBody] AreaModel areaModel)
        {
            var reurnArea = _areaFacade.CreateArea(Mapper.Map<AreaDto>(areaModel),UserId);

            return Ok(reurnArea);
        }


        [Route("api/Areas/EditArea", Name = "EditArea")]
        [HttpPost]
        public IHttpActionResult EditArea([FromBody] AreaModel areaModel)
        {
            var reurnArea = _areaFacade.EditArea(Mapper.Map<AreaDto>(areaModel), UserId);

            return Ok(reurnArea);
        }


        [Route("api/Areas/GetAreaById", Name = "GetAreaById")]
        [HttpGet]
        public IHttpActionResult GetAreaById(long areaId)
        {
            var reurnArea = _areaFacade.GetArea(areaId);
            return Ok(reurnArea);
        }

        
        
    }

}