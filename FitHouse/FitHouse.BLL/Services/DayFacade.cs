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
        private readonly IUserService _userService;


        public DayFacade(IDayService dayService, IUnitOfWorkAsync unitOfWork,
             IUserService userService) : base(unitOfWork)
        {
            _dayService = dayService;
            _userService = userService;
        }

        public List<DayDto> GetAllDays()
        {
            return Mapper.Map<List<DayDto>>(_dayService.GetAllDays());
        }
    }
}
