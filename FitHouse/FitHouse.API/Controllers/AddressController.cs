using FitHouse.API.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AutoMapper;
using FitHouse.API.Models;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;

namespace FitHouse.API.Controllers
{
    public class AddressController : BaseApiController
    {
        private readonly IAddressFacade _addressFacade;
        public AddressController(IAddressFacade addressFacade)
        {
            _addressFacade = addressFacade;
        }

        [Route("api/Address/GetUserAddresses/{userId:long}", Name = "GetUserAddresses")]
        [HttpGet]
        public IHttpActionResult GetUserAddresses(long userId)
        {
            var addresses = Mapper.Map<List<AddressModel>>(_addressFacade.GetUserAddresses(userId));

            return Ok(addresses);
        }

        [Route("api/Address", Name = "CreateAddress")]
        [HttpPost]
        public IHttpActionResult CreateArea([FromBody] AddressModel addressModel)
        {
            var reurnArea = _addressFacade.CreateAddress(Mapper.Map<AddressDto>(addressModel), UserId);

            return Ok(reurnArea);
        }



        [Route("api/Addresss/EditAddress", Name = "EditAddress")]
        [HttpPost]
        public IHttpActionResult EditAddress([FromBody] AddressModel addressModel)
        {
            var reurnAddress = _addressFacade.EditAddress(Mapper.Map<AddressDto>(addressModel), UserId);

            return Ok(reurnAddress);
        }

    }
}
