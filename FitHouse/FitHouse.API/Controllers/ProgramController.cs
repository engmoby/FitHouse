using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AutoMapper;
using FitHouse.API.Infrastructure;
using FitHouse.API.Models;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;
using FitHouse.Common.CustomException;

namespace FitHouse.API.Controllers
{
    public class ProgramController : BaseApiController
    {
        private readonly IProgramFacade _programFacade;
        private readonly IDayFacade _dayFacade;
        private readonly IItemFacade _itemFacade;
        public ProgramController(IItemFacade itemFacade, IProgramFacade programFacade, IDayFacade dayFacade)
        {
            _programFacade = programFacade;
            _dayFacade = dayFacade;
            _itemFacade = itemFacade;
        }

        [Route("api/Program", Name = "CreateProgram")]
        [HttpPost]
        public IHttpActionResult CreateProgram([FromBody] ProgramModel programModel)
        {

            var program = _programFacade.CreateProgram(Mapper.Map<ProgramDto>(programModel), UserId);

            return Ok(program);
        }


        [Route("api/Program/UpdateProgram", Name = "UpdateProgram")]
        [HttpPost]
        public IHttpActionResult UpdateProgram([FromBody] ProgramModel programModel)
        {
            var program = _programFacade.UpdateProgram(Mapper.Map<ProgramDto>(programModel));
            return Ok();
        }

        [Route("api/Program/UpdateProgramDetails", Name = "UpdateProgramDetails")]
        [HttpPost]
        public IHttpActionResult UpdateProgramDetails([FromBody] ProgramModel programModel)
        {

            var program = _programFacade.UpdateProgramDetails(programModel.ProgramId, programModel.ProgramDays, programModel.NoOfMeals, Mapper.Map<List<ItemProgramDto>>(programModel.Items));

            return Ok();
        }

        [Route("api/Program", Name = "GetAllPrograms")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<ProgramModel>))]
        public IHttpActionResult GetAllPrograms(int page = Page, int pagesize = PageSize)
        {
            var programs = _programFacade.GetAllPrograms(page, pagesize);
            var data = Mapper.Map<List<ProgramModel>>(programs.Data);

            return PagedResponse("GetAllPrograms", page, pagesize, programs.TotalCount, data);
        }

        [Route("api/Program/GetAllActivePrograms", Name = "GetAllActivePrograms")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<ProgramModel>))]
        public IHttpActionResult GetAllActivePrograms(int page = Page, int pagesize = PageSize)
        {
            var programs = _programFacade.GetAllActivePrograms(page, pagesize);
            var data = Mapper.Map<List<ProgramModel>>(programs.Data);

            return PagedResponse("GetAllActivePrograms", page, pagesize, programs.TotalCount, data);
        }

        [Route("api/Program/EditProgram", Name = "EditProgram")]
        [HttpPost]
        public IHttpActionResult EditProgram([FromBody] ProgramModel programModel)
        {
            var program = _programFacade.EditProgram(Mapper.Map<ProgramDto>(programModel), UserId);

            return Ok(program);
        }

        [Route("api/Program/GetAllProgramItems/{programId:long}", Name = "GetAllProgramItems")]
        [HttpGet]
        [ResponseType(typeof(ProgramModel))]
        public IHttpActionResult GetAllProgramItems(long programId)
        {
            var details = _programFacade.GetProgramItems(programId);
            var detailsModel = Mapper.Map<List<ProgramDetailModel>>(details);

            var items = Mapper.Map<List<ItemProgramModel>>(_itemFacade.GetItemsById(details));

            var days = Mapper.Map<List<DayModel>>(_dayFacade.GetExcludesDays(programId));

            var program = Mapper.Map<ProgramModel>(_programFacade.GetProgramDetails(programId));
            program.ProgramDetails = detailsModel;
            program.Days = days;
            program.Items = items;

            return Ok(program);
        }



        [Route("api/Program/GetProgramById", Name = "GetProgramById")]
        [HttpGet]
        public IHttpActionResult GetProgramById(long programId)
        {
            var reurnProgram = _programFacade.GetProgramById(programId);
            return Ok(reurnProgram);
        }
    }
}
