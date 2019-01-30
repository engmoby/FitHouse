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
    public class OrderService : Service<Order>, IOrderService
    {
        public OrderService(IRepositoryAsync<Order> repository) : base(repository)
        {
            _repository = repository;
        }

        public PagedResultsDto GetAllOrders(long branchId, int page, int pageSize)
        {
            var query = Queryable().Where(x => branchId <= 0 || x.BranchId == branchId).OrderBy(x => x.OrderId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();
            var data = query.OrderBy(x => x.OrderId).ToList();
            results.Data = Mapper.Map<List<Order>, List<OrderDto>>(data);

            return results;
        }

    }
}