using AutoMapper;
using FitHouse.API.Infrastructure;
using FitHouse.API.Models;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace FitHouse.API.Controllers
{
    public class SizesController : BaseApiController
    {

        private ISizeFacade _sizeFacade;

        public SizesController(ISizeFacade sizeFacade)
        {
            _sizeFacade = sizeFacade;
        }

        [Route("api/Sizes", Name = "AddSize")]
        [HttpPost]
        public IHttpActionResult AddSize([FromBody] SizeModel sizeModel)
        {
            _sizeFacade.AddSize(Mapper.Map<SizeDto>(sizeModel));
            return Ok();
        }
        
        [Route("api/Sizes/", Name = "GetAllSizes")]
        [HttpGet]
        [ResponseType(typeof(List<SizeModel>))]
        public IHttpActionResult GetAllSizes(int page = Page, int pagesize = PageSize)
        {
            var sizes = _sizeFacade.GetAllSizes(page, pagesize);
            return PagedResponse("GetAllSizes", page, pagesize, sizes.TotalCount, Mapper.Map<List<SizeModel>>(sizes.Data));
        }

        
        [Route("api/Sizes/{sizeId:long}", Name = "DeleteSize")]
        [HttpDelete]
        public IHttpActionResult DeleteSize(long sizeId)
        {
            _sizeFacade.DeleteSize(sizeId);
            return Ok();
        }

        [Route("api/Sizes/{sizeId:long}", Name = "GetSize")]
        [HttpGet]
        public IHttpActionResult GetSize(long sizeId)
        {
            return Ok(Mapper.Map<SizeModel>(_sizeFacade.GetSize(sizeId)));
        }

        [Route("api/Sizes", Name = "UpdateSize")]
        [HttpPut]
        public IHttpActionResult UpdateSize([FromBody] SizeModel sizeModel)
        {
            _sizeFacade.UpdateSize(Mapper.Map<SizeDto>(sizeModel));
            return Ok();
        }
    }
}
