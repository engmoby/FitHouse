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
    public class AreaService : Service<Area>, IAreaService
    {
        public AreaService(IRepositoryAsync<Area> repository) : base(repository)
        {
            _repository = repository;
        }
        
        public PagedResultsDto GetAllAreas(long cityId,int page, int pageSize, int tenantId)
        { 
            var query = Queryable().Where(x => !x.IsDeleted && (x.CityId.Value == cityId)).OrderBy(x => x.AreaId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();
            // results.TotalCount = _repository.Query(x => !x.IsDeleted).Select().Count(x => !x.IsDeleted);
            var modelReturn = pageSize > 0
                ? query.OrderBy(x => x.AreaId).Skip((page - 1) * pageSize).Take(pageSize).ToList()
                : query.Where(x => x.Branches.Count > 0).OrderBy(x => x.AreaId).ToList();
            results.Data = Mapper.Map<List<Area>, List<AreaDto>>(modelReturn);

            //var products = _repository.Query(x => !x.IsDeleted).Include(p => p.AreaTranslations).Select().OrderBy(x => x.AreaId).ToList();
            //results.Data = Mapper.Map<List<Area>, List<AreaDto>>(products);
            return results;
        }

    }
}