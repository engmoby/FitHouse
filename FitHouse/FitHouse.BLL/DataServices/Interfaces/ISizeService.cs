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
    public interface ISizeService : IService<Size>
    {
        PagedResultsDto GetAllSizes(int page, int pageSize);
    }
}
