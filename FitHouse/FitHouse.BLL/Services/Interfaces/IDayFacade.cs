using FitHouse.BLL.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface IDayFacade
    {
        List<DayDto> GetAllDays();
        List<DayDto> GetExcludesDays(long programId);
    }
}
