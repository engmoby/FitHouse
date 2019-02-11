using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitHouse.BLL.DTOs;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface ISettingFacade
    {
        SettingDto GetSetting();
        SettingDto UpdateSetting(SettingDto settingDto, long userId);
        SettingDto AddSettings(SettingDto settingDto, long userId);
    }
}
