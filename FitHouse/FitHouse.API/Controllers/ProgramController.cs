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
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;
using FitHouse.Common;
using FitHouse.Common.CustomException;

namespace FitHouse.API.Controllers
{
    public class ProgramController : BaseApiController
    {
        private readonly IProgramFacade _programFacade;
        private readonly IUserService _userService;
        private readonly IOrderDetailsService _orderDetailsService;
        private readonly IProgramService _programService;
        private readonly IDayFacade _dayFacade;
        private readonly IItemFacade _itemFacade;
        private readonly IProgramDetailService _programDetailService;
        public ProgramController(IItemFacade itemFacade, IProgramFacade programFacade, IDayFacade dayFacade, IProgramService programService, IProgramDetailService programDetailService, IOrderDetailsService orderDetailsService, IUserService userService)
        {
            _programFacade = programFacade;
            _dayFacade = dayFacade;
            _programService = programService;
            _programDetailService = programDetailService;
            _orderDetailsService = orderDetailsService;
            _userService = userService;
            _itemFacade = itemFacade;
        }

        [Route("api/Program", Name = "CreateProgram")]
        [HttpPost]
        public IHttpActionResult CreateProgram([FromBody] ProgramModel programModel)
        {
            /*custom program*/
            var program = _programFacade.CreateProgram(Mapper.Map<ProgramDto>(programModel), UserId);
            if (programModel.IsOrdering)
            {
                var userInfo = _userService.Find(programModel.UserId);
                MailHelper.SendMailOrder("Fit House Order", programModel.Day.ToString("F"),
                    userInfo.FirstName + " " + userInfo.LastName, program.OrderCode, programModel.Price.ToString("F"), userInfo.Email);
            }

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

            var program = _programFacade.UpdateProgramDetails(programModel.ProgramId, programModel.ProgramDays, programModel.NoOfMeals, programModel.ItemType,
                Mapper.Map<List<ItemSizeDto>>(programModel.Items));

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
            if (!programModel.IsActive || programModel.IsDeleted)
            {

                var checkIfUsedOfProgram = _orderDetailsService.Queryable().Where(x => x.ProgramId == programModel.ProgramId);
                if (checkIfUsedOfProgram.Any())
                    throw new ValidationException(ErrorCodes.RecordIsUsedInAnotherModule);

            }

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
            foreach (var itemModel in detailsModel)
            {
                itemModel.ItemSize.ImageUrl = Url.Link("ItemImage", new { itemModel.ItemSize.CategoryId, itemModel.ItemSize.ItemId });

            }
            // var items = Mapper.Map<List<ItemProgramModel>>(_itemFacade.GetItemsById(details));

            var days = Mapper.Map<List<DayModel>>(_dayFacade.GetExcludesDays(programId));

            var program = Mapper.Map<ProgramModel>(_programFacade.GetProgramDetails(programId));
            program.ProgramDetails = detailsModel;
            program.Days = days;
            // program.Items = items;

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
