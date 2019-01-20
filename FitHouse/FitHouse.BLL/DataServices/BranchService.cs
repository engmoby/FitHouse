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
    public class BranchService : Service<Branch>, IBranchService
    {
        public BranchService(IRepositoryAsync<Branch> repository) : base(repository)
        {
            _repository = repository;
        }
        
        public PagedResultsDto GetAllBranchs(int page, int pageSize)
        {  

            var query = Queryable().Where(x => !x.IsDeleted ).OrderBy(x => x.BranchId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();

            results.Data = Mapper.Map<List<Branch>, List<BranchDto>>(query.OrderBy(x => x.BranchId).Skip((page - 1) * pageSize).Take(pageSize).ToList());

            return results;

        }

    }
}