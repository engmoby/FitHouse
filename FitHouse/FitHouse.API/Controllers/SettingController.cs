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
    public class SettingController : BaseApiController
    {
        private readonly ISettingFacade _settingFacade;
        public SettingController(ISettingFacade settingFacade)
        {
            _settingFacade = settingFacade;
        }

        [Route("api/Setting/GetSetting", Name = "GetSetting")]
        [HttpGet]
        public IHttpActionResult GetSetting()
        {
            var setting = Mapper.Map<SettingModel>(_settingFacade.GetSetting());

            return Ok(setting);
        }

        [Route("api/Setting/UpdateSetting", Name = "UpdateSetting")]
        [HttpPost]
        public IHttpActionResult UpdateSetting([FromBody] SettingModel settingModel)
        {
            var setting = _settingFacade.UpdateSetting(Mapper.Map<SettingDto>(settingModel), UserId);
            return Ok(setting);
        }

    }
}
