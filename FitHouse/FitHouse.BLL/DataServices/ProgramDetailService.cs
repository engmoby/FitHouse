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

        public List<ProgramDetail> GetProgramDetails(long programId)
        {
            var details = _repository.Query(x => x.IsDeleted != true && x.ProgramId == programId).Select().ToList();
            return details;
        }

        public List<long> DistictProgramDays(long programId)
        {
            var details = _repository.Query(x => x.IsDeleted != true && x.ProgramId == programId).Select(x=>x.DayNumber).Distinct().ToList();
            return details;
        }
    }
}
