using System.Collections.Generic;
using System.Web.Http;
using AutoMapper;
using FitHouse.API.Infrastructure;
using FitHouse.API.Models;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;

namespace FitHouse.API.Controllers
{
    public class LogController : BaseApiController
    { 
        private readonly ILogFacade _logFacade;
        public LogController(ILogFacade logFacade)
        {
            _logFacade = logFacade; 
        }

        [Route("api/Logs/GetAllLogs", Name = "GetAllLogs")]
        [HttpGet]
        public IHttpActionResult GetAllLogs(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto logObj = _logFacade.GetAllLogs(page, pagesize);
            var data = Mapper.Map<List<LogModel>>(logObj.Data);
            return PagedResponse("GetAllLogs", page, pagesize, logObj.TotalCount, data);
        }
           
    }

}