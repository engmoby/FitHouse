using AutoMapper;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitHouse.BLL.DataServices
{
    public class SizeService : Service<Size>, ISizeService
    {
        public SizeService(IRepositoryAsync<Size> repository) : base(repository)
        {

        }
        public PagedResultsDto GetAllSizes(int page, int pageSize)
        {
            var query = Queryable().Where(x => !x.IsDeleted).OrderBy(x => x.SizeId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();

            var modelReturn = pageSize > 0
                ? query.OrderBy(x => x.SizeId).Skip((page - 1) * pageSize).Take(pageSize).ToList()
                : query.Where(x => !x.IsDeleted).OrderBy(x => x.SizeId).ToList();

            results.Data = Mapper.Map<List<Size>, List<SizeDto>>(modelReturn);

            return results;

        }
    }
}
