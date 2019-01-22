using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AutoMapper;
using FitHouse.API.Infrastructure;
using FitHouse.API.Models;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;

namespace FitHouse.API.Controllers
{
    public class ProgramController : BaseApiController
    {
        private readonly IProgramFacade _programFacade;
        public ProgramController(IProgramFacade programFacade)
        {
            _programFacade = programFacade;
        }

        [Route("api/Program", Name = "CreateProgram")]
        [HttpPost]
        public IHttpActionResult CreateProgram([FromBody] ProgramModel programModel)
        {

            var program = _programFacade.CreateProgram(Mapper.Map<ProgramDto>(programModel), UserId);

            return Ok(program);
        }
    }
}
