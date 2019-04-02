using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace FitHouse.BLL.DataServices
{
    public class PromotionService : Service<Promotion>, IPromotionService
    {
        public PromotionService(IRepositoryAsync<Promotion> repository) : base(repository)
        {
            _repository = repository;
        }
        public PagedResultsDto GetAllPromotiones(int page, int pageSize)
        {
            var query = Queryable().OrderByDescending(x => x.PromotionId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();
            var data = pageSize > 0
                ? query.OrderByDescending(x => x.PromotionId).Skip((page - 1) * pageSize).Take(pageSize).ToList()
                : query.OrderByDescending(x => x.PromotionId).ToList();
            results.Data = Mapper.Map<List<Promotion>, List<PromotionDto>>(data);
            return results;
        }

        public bool CheckNameExist(string objName, long recordId)
        {
            return Queryable().Any(x => x.Title.ToLower() == objName.ToLower() && x.PromotionId != recordId);
        }
    }
}
