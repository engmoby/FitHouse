using System.Collections.Generic;
using System.Web.Http;
using AutoMapper;
using FitHouse.API.Infrastructure;
using FitHouse.API.Models;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;

namespace FitHouse.API.Controllers
{
    public class BranchController : BaseApiController
    { 
        private readonly IBranchFacade _branchFacade;
        public BranchController(IBranchFacade branchFacade)
        {
            _branchFacade = branchFacade; 
        }

        [Route("api/Branchs/GetAllBranchs", Name = "GetAllBranchs")]
        [HttpGet]
        public IHttpActionResult GetAllBranchs(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto branchObj = _branchFacade.GetAllBranchs(page, pagesize);
            var data = Mapper.Map<List<BranchModel>>(branchObj.Data);
            return PagedResponse("GetAllAreas", page, pagesize, branchObj.TotalCount, data, branchObj.IsParentTranslated);
        }


        [Route("api/Branchs", Name = "CreateBranch")]
        [HttpPost]
        public IHttpActionResult CreateBranch([FromBody] BranchModel branchModel)
        {
            var reurnBranch = _branchFacade.CreateBranch(Mapper.Map<BranchDto>(branchModel), UserId);

            return Ok(reurnBranch);
        }


        [Route("api/Branchs/EditBranch", Name = "EditBranch")]
        [HttpPost]
        public IHttpActionResult EditBranch([FromBody] BranchModel BranchModel)
        {
            var reurnBranch = _branchFacade.EditBranch(Mapper.Map<BranchDto>(BranchModel), UserId);

            return Ok(reurnBranch);
        }


        [Route("api/Branchs/GetBranchById", Name = "GetBranchById")]
        [HttpGet]
        public IHttpActionResult GetBranchById(long BranchId)
        {
            var reurnBranch = _branchFacade.GetBranch(BranchId);
            return Ok(reurnBranch);
        }
    }

}