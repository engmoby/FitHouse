using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface ISizeTranslationService : IService<SizeTranslation>
    {
        bool CheckSizeNameExist(string sizeName, string language, long sizeId);
    }
}
