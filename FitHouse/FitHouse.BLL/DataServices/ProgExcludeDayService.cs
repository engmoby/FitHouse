using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;
using Repository.Pattern.Repositories;

namespace FitHouse.BLL.DataServices
{
    public class ProgExcludeDayService : Service<ProgExcludeDay>, IProgExcludeDayService
    {
        public ProgExcludeDayService(IRepositoryAsync<ProgExcludeDay> repository) : base(repository)
        {
            _repository = repository;
        }
        
        public List<ProgExcludeDay> GetExcludesDays(long programId)
        {
            var days = _repository.Query(x => x.IsDeleted != true && x.ProgramId == programId).Select().ToList();
            return days;
        }

    }
}
