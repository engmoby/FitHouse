using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace FitHouse.BLL.DataServices
{
    public class ProgramDetailService : Service<ProgramDetail>, IProgramDetailService
    {
        public ProgramDetailService(IRepositoryAsync<ProgramDetail> repository) : base(repository)
        {
            _repository = repository;
        }
   
    }
}
