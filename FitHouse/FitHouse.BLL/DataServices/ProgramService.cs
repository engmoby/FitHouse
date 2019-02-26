using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;


namespace FitHouse.BLL.DataServices
{
    public class ProgramService : Service<Program>, IProgramService
    {
        public ProgramService(IRepositoryAsync<Program> repository) : base(repository)
        {
            _repository = repository;
        }

        public PagedResultsDto GetAllPrograms(int page, int pageSize)
        {
            PagedResultsDto results = new PagedResultsDto();
            var query = Queryable().Where(x => !x.IsDeleted && !x.IsForClient).OrderBy(x => x.ProgramId);
            results.TotalCount = _repository.Queryable().Count(x => !x.IsDeleted && !x.IsForClient);

            var programs = pageSize > 0
                ? query.OrderBy(x => x.ProgramId).Skip((page - 1) * pageSize).Take(pageSize).ToList()
                : query.OrderBy(x => x.ProgramId).ToList();
            results.Data = Mapper.Map<List<Program>, List<ProgramDto>>(programs);

            return results;
        }

    }
}
