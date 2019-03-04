﻿using System;
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
            var query = Queryable().Where(x => branchId <= 0 || x.BranchId == branchId).OrderByDescending(x => x.OrderId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();
            var data = query.OrderByDescending(x => x.OrderId).Skip((page - 1) * pageSize).Take(pageSize).ToList();
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
        public PagedResultsDto GetOrderByClientId(long userId, int page, int pageSize)
        {
            var query = Queryable().Where(x =>   x.UserId == userId).OrderByDescending(x => x.OrderId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();
            var data = query.OrderByDescending(x => x.OrderId).Skip((page - 1) * pageSize).Take(pageSize).ToList();
            //var orderDto = new List<OrderFullDto>(); 
            //foreach (var dto in data)
            //{
            //    decimal price = 0;
            //    if (dto.Type == Enums.OrderType.Item)
            //        price += dto.OrderDetails.Sum(dtoOrderDetail => dtoOrderDetail.Item.Price);

            //    if (dto.Type == Enums.OrderType.Meal)
            //        price += dto.OrderDetails.Sum(dtoOrderDetail => dtoOrderDetail.Meal.MealPrice);

            //    if (dto.Type == Enums.OrderType.Program)
            //        foreach (var dtoOrderDetail in dto.OrderDetails)
            //            price = dtoOrderDetail.Program.Price;

            //    var convertToDto = Mapper.Map<OrderFullDto>(dto);
            //     convertToDto.Price = price;
            //    orderDto.Add(convertToDto);
            //}

            results.Data = Mapper.Map<List<OrderFullDto>>(data);

            //results.Data = orderDto;
            return results;
        }
        public PagedResultsDto GetAllOrdersForDelivery(long branchId, int page, int pageSize)
        {
            var queryReturn = new List<Order>();
            var query = Queryable().Where(x => (branchId <= 0 || x.BranchId == branchId) && x.IsPaid && x.IsDelivery && x.IsProgram).OrderByDescending(x => x.OrderId);
            var todaysDate = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day);

            foreach (var order in query)
            {
                if (order.OrderDetails.Any(d => d.Day != null &&
                (d.Day.Value.Year == todaysDate.Year && d.Day.Value.Month == todaysDate.Month && d.Day.Value.Day == todaysDate.Day)
                && d.Status == Enums.OrderStatus.KitchenFinished || d.Status == Enums.OrderStatus.OnTheWay))
                {
                    var record =
                        order.OrderDetails.FirstOrDefault(d => d.Day != null &&
                                                    (d.Day.Value.Year == todaysDate.Year &&
                                                     d.Day.Value.Month == todaysDate.Month &&
                                                     d.Day.Value.Day == todaysDate.Day) && d.Status == Enums.OrderStatus.KitchenFinished || d.Status == Enums.OrderStatus.OnTheWay);

                    order.OrderDetails = null;
                    order.OrderDetails = new List<OrderDetail>();

                    order.OrderDetails.Add(record);
                    queryReturn.Add(order);
                }
            }
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = queryReturn.Select(x => x).Count();
            var data = queryReturn.OrderByDescending(x => x.OrderId).ToList();

            results.Data = Mapper.Map<List<Order>, List<OrderFullDto>>(data);

            return results;
        }
        public PagedResultsDto GetAllOrdersForKitchen(long branchId, int page, int pageSize)
        {
            var queryReturn = new List<Order>();
            IOrderedQueryable<Order> query;
            List<Order> queryList = new List<Order>();
            //var query = Queryable().Where(x => (branchId <= 0 || x.BranchId == branchId) && x.IsPaid && x.IsDelivery && x.IsProgram &&
            //                                   x.OrderStatus == Enums.OrderStatus.Prepering).OrderByDescending(x => x.OrderId);
            var queryPogram = Queryable().Where(x => (branchId <= 0 || x.BranchId == branchId) && x.IsPaid && x.IsProgram && x.OrderStatus == Enums.OrderStatus.Prepering).OrderByDescending(x => x.OrderId);
            var queryNotProgram = Queryable().Where(x => (branchId <= 0 || x.BranchId == branchId) && !x.IsProgram && x.OrderStatus == Enums.OrderStatus.Prepering).OrderByDescending(x => x.OrderId);


            queryList.AddRange(queryPogram);
            queryList.AddRange(queryNotProgram);
            var todaysDate = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day);

            foreach (var order in queryList)
            {
                if (order.OrderDetails.Any(d => d.Day != null &&
                (d.Day.Value.Year == todaysDate.Year && d.Day.Value.Month == todaysDate.Month && d.Day.Value.Day == todaysDate.Day) && d.Status == Enums.OrderStatus.Prepering))
                {
                    var record =
                        order.OrderDetails.FirstOrDefault(d => d.Day != null &&
                                                               (d.Day.Value.Year == todaysDate.Year &&
                                                                d.Day.Value.Month == todaysDate.Month &&
                                                                d.Day.Value.Day == todaysDate.Day) && d.Status == Enums.OrderStatus.Prepering);

                    order.OrderDetails = null;
                    order.OrderDetails = new List<OrderDetail>();

                    order.OrderDetails.Add(record);
                    queryReturn.Add(order);
                }
            }
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = queryReturn.Select(x => x).Count();
            var data = queryReturn.OrderByDescending(x => x.OrderId).ToList();

            results.Data = Mapper.Map<List<Order>, List<OrderFullDto>>(data);

            return results;
        }
        public PagedResultsDto GetAllOrdersForPickup(long branchId, int page, int pageSize)
        {
            var queryReturn = new List<Order>();
            var orderDto = new List<OrderDto>();
            var query = Queryable().Where(x => (branchId <= 0 || x.BranchId == branchId) && !x.IsDelivery).OrderByDescending(x => x.OrderId);
            var todaysDate = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day);

            foreach (var order in query)
            {
                foreach (var orderOrderDetail in order.OrderDetails)
                {
                    var day = orderOrderDetail.Day.Value.Day;
                    var month = orderOrderDetail.Day.Value.Month;
                    var yes = orderOrderDetail.Day.Value.Year;

                }
                if (order.OrderDetails.Any(d => d.Day != null &&
                                                d.Day.Value.Year == todaysDate.Year && d.Day.Value.Month == todaysDate.Month && d.Day.Value.Day == todaysDate.Day))
                {
                    var record =
                        order.OrderDetails.FirstOrDefault(d => d.Day != null &&
                                                               d.Day.Value.Year == todaysDate.Year &&
                                                                d.Day.Value.Month == todaysDate.Month &&
                                                                d.Day.Value.Day == todaysDate.Day);

                    order.OrderDetails = null;
                    order.OrderDetails = new List<OrderDetail>();

                    order.OrderDetails.Add(record);
                    queryReturn.Add(order);
                }
            }
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = queryReturn.Select(x => x).Count();
            var data = queryReturn.OrderByDescending(x => x.OrderId).ToList();

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

            //  results.Data = Mapper.Map<List<Order>, List<OrderDto>>(data);

            return results;
        }

    }
}