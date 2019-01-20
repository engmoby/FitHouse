﻿using System.Collections.Generic;
using System.Web.Http;
using AutoMapper;
using FitHouse.API.Infrastructure;
using FitHouse.API.Models;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces; 

namespace FitHouse.API.Controllers
{
    public class RegionsController : BaseApiController
    {
        private readonly IRegionFacade _regionFacade;

        public RegionsController(IRegionFacade regionFacade)
        {
            _regionFacade = regionFacade;
        }

        [Route("api/Countries/{countryId:long}/Regions", Name = "GetAllRegions")]
        [HttpGet]
        public IHttpActionResult GetAllRegions(long countryId, int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto allRegions = _regionFacade.GetAllRegions(countryId, page, pagesize);
            var data = Mapper.Map<List<RegionModel>>(allRegions.Data);
            return PagedResponse("GetAllRegions", page, pagesize, allRegions.TotalCount, data,
                allRegions.IsParentTranslated);
        }


        [Route("api/Regions", Name = "CreateRegion")]
        [HttpPost]
        public IHttpActionResult CreateRegion([FromBody] RegionModel regionModel)
        {
            var region = _regionFacade.CreateRegion(Mapper.Map<RegionDto>(regionModel), UserId);

            return Ok(region);
        }


        [Route("api/Regions/EditRegion", Name = "EditRegion")]
        [HttpPost]
        public IHttpActionResult EditRegion([FromBody] RegionModel regionModel)
        {
            var region = _regionFacade.EditRegion(Mapper.Map<RegionDto>(regionModel), UserId);

            return Ok(region);
        }

        [Route("api/Regions/{regionId:long}", Name = "GetRegion")]
        [HttpGet]
        public IHttpActionResult GetRegion(long regionId)
        {
            var regionModel = Mapper.Map<RegionModel>(_regionFacade.GetRegion(regionId));
            return Ok(regionModel);
        }

        
    }
}