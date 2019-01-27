using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AutoMapper;
using FitHouse.API.Infrastructure;
using FitHouse.API.Models;
using FitHouse.BLL.Services.Interfaces;

namespace FitHouse.API.Controllers
{
    public class DayController : BaseApiController
    {

        private readonly IDayFacade _dayFacade;
        public DayController(IDayFacade dayFacade)
        {
            _dayFacade = dayFacade;
        }

        [Route("api/Day/GetAllDays", Name = "GetAllDays")]
        [HttpGet]
        public IHttpActionResult GetAllDays()
        {
            var days = Mapper.Map<List<DayModel>>(_dayFacade.GetAllDays());

            return Ok(days);
        }
    }
}
