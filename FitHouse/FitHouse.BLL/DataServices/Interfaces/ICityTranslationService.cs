using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface ICityTranslationService:IService<CityTranslation>
    {
        bool CheckNameExist(string objName, string language, long recordId, long tenantId, long regionId);
    }
}
