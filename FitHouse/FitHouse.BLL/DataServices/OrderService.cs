using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.Common;
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
            var orderDto = new List<OrderDto>();

            //  orderDto = Mapper.Map<List<Order>, List<OrderDto>>(data);
            foreach (var dto in data)
            {
                decimal price = 0;
                if (dto.Type == Enums.OrderType.Item)
                    price += dto.OrderDetails.Sum(dtoOrderDetail => dtoOrderDetail.Item.Price);

                if (dto.Type == Enums.OrderType.Meal)
                    price += dto.OrderDetails.Sum(dtoOrderDetail => dtoOrderDetail.Meal.MealPrice);

                if (dto.Type == Enums.OrderType.Program)
                    foreach (var dtoOrderDetail in dto.OrderDetails)
                        price = dtoOrderDetail.Program.Price;

                var convertToDto = Mapper.Map<OrderDto>(dto);
                convertToDto.Price = price;
                orderDto.Add(convertToDto);
            }
            results.Data = orderDto;

            return results;
        }
        public PagedResultsDto GetAllOrdersForDelivery(long branchId, int page, int pageSize)
        {
            var query = Queryable().
                Where(x => branchId <= 0 || x.BranchId == branchId && x.IsPaid && x.IsDelivery && x.IsProgram  )
                .OrderBy(x => x.OrderId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();
            var data = query.OrderBy(x => x.OrderId).ToList();

            results.Data = Mapper.Map<List<Order>, List<OrderFullDto>>(data);

            return results;
        }

    }
}