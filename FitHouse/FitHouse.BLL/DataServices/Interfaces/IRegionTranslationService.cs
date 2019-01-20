using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface IRegionTranslationService:IService<RegionTranslation>
    {
        bool CheckNameExist(string objName, string language, long recordId, long countryId);
    }
}
