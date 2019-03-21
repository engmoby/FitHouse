using FitHouse.API.Infrastructure;
using System.Collections.Generic;
using System.Web.Http;
using AutoMapper;
using FitHouse.API.Models;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;
using FitHouse.Common;

namespace FitHouse.API.Controllers
{
    public class PromotionController : BaseApiController
    {
        private readonly IPromotionFacade _promotionFacade;
        public PromotionController(IPromotionFacade promotionFacade)
        {
            _promotionFacade = promotionFacade;
        }

        [Route("api/Promotion/GetAllPromotions", Name = "GetAllPromotions")]
        [HttpGet]
        public IHttpActionResult GetAllPromotiones(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto promotiones = _promotionFacade.GetAllPromotions(page, pagesize);
            var data = Mapper.Map<List<PromotionModel>>(promotiones.Data);
            return PagedResponse("GetAllPromotions", page, pagesize, promotiones.TotalCount, data);
             
        }

        [Route("api/Promotion", Name = "CreatePromotion")]
        [HttpPost]
        public IHttpActionResult CreateArea([FromBody] PromotionModel promotionModel)
        {
            var reurnArea = _promotionFacade.CreatePromotion(Mapper.Map<PromotionDto>(promotionModel)); 
            return Ok(reurnArea);
        }



        [Route("api/Promotion/EditPromotion", Name = "EditPromotion")]
        [HttpPost]
        public IHttpActionResult EditPromotion([FromBody] PromotionModel promotionModel)
        {
            var reurnPromotion = _promotionFacade.EditPromotion(Mapper.Map<PromotionDto>(promotionModel)); 
            return Ok(reurnPromotion);
        }

        [Route("api/Promotion/GetPromotionById", Name = "GetPromotionById")]
        [HttpGet]
        public IHttpActionResult GetPromotionById(long promotionId)
        {
            var reurnPromotion = _promotionFacade.GetPromotion(promotionId);
            return Ok(reurnPromotion);
        }
        [Route("api/Promotion/CheckPromotion", Name = "CheckPromotion")]
        [HttpPost]
        public IHttpActionResult CheckPromotion(PromotionModel promotionModel)
        {
            var reurnPromotion = _promotionFacade.CheckPromotion(promotionModel.Title, promotionModel.Type);
            return Ok(reurnPromotion);
        }
    }
}
