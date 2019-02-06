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
    public class LogService : Service<Log>, ILogService
    {
        public LogService(IRepositoryAsync<Log> repository) : base(repository)
        {
            _repository = repository;
        }
        
        public PagedResultsDto GetAllLogs(int page, int pageSize)
        { 
            var query = Queryable().OrderBy(x => x.LogId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();
            var modelReturn = query.OrderBy(x => x.LogId).Skip((page - 1) * pageSize).Take(pageSize).ToList();
                 
            results.Data = Mapper.Map<List<Log>, List<LogDto>>(modelReturn);
             
            return results;
        }

    }
}