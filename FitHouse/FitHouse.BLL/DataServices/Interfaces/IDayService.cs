using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface IDayService : IService<Day>
    {
        List<Day> GetAllDays();
        Day GetDayById(long dayId);
    }
}
