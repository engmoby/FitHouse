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
            results.TotalCount = _repository.Queryable().Count(x => !x.IsDeleted);
            results.Data = Mapper.Map<List<Program>, List<ProgramDto>>(_repository.Query(x => !x.IsDeleted).Select().OrderBy(x => x.ProgramId).Skip((page - 1) * pageSize)
                .Take(pageSize).ToList());
            return results;
        }

    }
}
