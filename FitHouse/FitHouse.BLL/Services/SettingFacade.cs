using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;
using FitHouse.DAL.Entities.Model;
using Repository.Pattern.UnitOfWork;

namespace FitHouse.BLL.Services
{
    public class SettingFacade : BaseFacade, ISettingFacade
    {
        private readonly ISettingService _settingService;

        public SettingFacade(ISettingService settingService, IUnitOfWorkAsync unitOfWork) : base(unitOfWork)
        {
            _settingService = settingService;
        }

        public SettingDto GetSetting()
        {
            return Mapper.Map<SettingDto>(_settingService.GetSetting());

        }

        public SettingDto UpdateSetting(SettingDto settingDto, long userId)
        {
            var setting = Mapper.Map<Setting>(settingDto);

            _settingService.Insert(setting);
            SaveChanges();

            return settingDto;
        }
    }
}
