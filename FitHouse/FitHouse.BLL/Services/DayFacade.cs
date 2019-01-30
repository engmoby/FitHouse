using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;
using Repository.Pattern.UnitOfWork;

namespace FitHouse.BLL.Services
{
    public class DayFacade : BaseFacade, IDayFacade
    {
        private readonly IDayService _dayService;
        private readonly IProgExcludeDayService _progExcludeDayService;
        private readonly IUserService _userService;


        public DayFacade(IDayService dayService, IUnitOfWorkAsync unitOfWork,
             IUserService userService, IProgExcludeDayService progExcludeDayService) : base(unitOfWork)
        {
            _dayService = dayService;
            _userService = userService;
            _progExcludeDayService = progExcludeDayService;
        }

        public List<DayDto> GetAllDays()
        {
            return Mapper.Map<List<DayDto>>(_dayService.GetAllDays());
        }

        public List<DayDto> GetExcludesDays(long programId)
        {
            var programDays = Mapper.Map<List<ProgExcludeDayDto>>(_progExcludeDayService.GetExcludesDays(programId));
            var days = new List<DayDto>();

            foreach (var day in programDays)
            {
                var dayIte = Mapper.Map<DayDto>(_dayService.GetDayById(day.DayId));
                days.Add(dayIte);
            }
            return days;
        }
        
    }
}
