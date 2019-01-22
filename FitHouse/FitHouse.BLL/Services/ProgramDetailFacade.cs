using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.Services.Interfaces;
using Repository.Pattern.UnitOfWork;

namespace FitHouse.BLL.Services
{
    public class ProgramDetailFacade : BaseFacade, IProgramDetailFacade
    {
        private readonly IProgramService _programService;
        private readonly IUserService _userService;


        public ProgramDetailFacade(IProgramService programService, IUnitOfWorkAsync unitOfWork,
           IUserService userService) : base(unitOfWork)
        {
            _programService = programService;
            _userService = userService;
        }
    }
}
