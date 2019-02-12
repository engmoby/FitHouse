using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;
using FitHouse.Common;
using FitHouse.Common.CustomException;
using Repository.Pattern.UnitOfWork;
using FitHouse.DAL.Entities.Model;

namespace FitHouse.BLL.Services
{
    public class OrderFacade : BaseFacade, IOrderFacade
    {
        private readonly IOrderService _orderService;
        private readonly IItemService _itemService;
        private readonly IMealservice _mealservice;
        private readonly IOrderDetailsService _orderDetailsService;
        private readonly IProgramDetailService _programDetailService;
        private readonly IProgExcludeDayService _progExcludeDayService;
        public OrderFacade(IOrderService orderService, IUnitOfWorkAsync unitOfWork,
            IOrderDetailsService orderDetailsService, IProgramDetailService programDetailService, IItemService itemService, IProgExcludeDayService progExcludeDayService, IMealservice mealservice) : base(unitOfWork)
        {
            _orderService = orderService;
            _orderDetailsService = orderDetailsService;
            _programDetailService = programDetailService;
            _itemService = itemService;
            _progExcludeDayService = progExcludeDayService;
            _mealservice = mealservice;
        }
        public OrderFacade(IOrderService orderService, IOrderDetailsService orderDetailsService, IItemService itemService, IProgExcludeDayService progExcludeDayService, IMealservice mealservice)
        {
            _orderService = orderService;
            _orderDetailsService = orderDetailsService;
            _itemService = itemService;
            _progExcludeDayService = progExcludeDayService;
            _mealservice = mealservice;
        }

        public OrderDto GetOrder(long orderId)
        {
            if (orderId == 0)
            {
                return null;
            }
            //var getOrder = _OrderService.Find(OrderId);

            var getOrder = _orderService.Query(x => x.OrderId == orderId).Select().FirstOrDefault();

            var afterMap = Mapper.Map<OrderDto>(getOrder);

            // afterMap.OrderDetails = _OrderPermissionService.GetOrderPermissionById(OrderId);

            return afterMap;
        }
        public OrderFullDto GetFullOrder(long orderId)
        {
            if (orderId == 0)
                return null;
            var getOrder = _orderService.Query(x => x.OrderId == orderId).Select().FirstOrDefault();
            var afterMap = Mapper.Map<OrderFullDto>(getOrder);
            return afterMap;
        }

        public OrderDto EditOrder(OrderDto orderDto, int userId)
        {
            var orderObj = _orderService.Query(x => x.OrderId == orderDto.OrderId).Select().FirstOrDefault();

            if (orderObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);
            orderObj.IsPaid = orderDto.IsPaid;
            orderObj.OrderStartDate = orderDto.OrderStartDate ?? orderObj.OrderStartDate;
            orderObj.OrderStatus = orderDto.OrderStatus;

            if (orderObj.IsProgram)
            {
                var lastDate = orderObj.OrderStartDate;
                var excludeDays = new List<ProgExcludeDay>();
                foreach (var orderObjOrderDetail in orderObj.OrderDetails)
                {
                    if (orderObjOrderDetail.ProgramId != null)
                        if (!excludeDays.Any())
                            excludeDays = _progExcludeDayService.GetExcludesDays((long)orderObjOrderDetail.ProgramId).ToList();

                    if (orderObjOrderDetail.DayNumber == 1)
                    {
                        orderObjOrderDetail.Day = lastDate;
                        orderObjOrderDetail.Status = Enums.OrderStatus.Prepering;
                    }

                    else
                    {
                        lastDate = lastDate?.AddDays(1);
                        foreach (var day in excludeDays)
                        {
                            if (lastDate != null && day.DayId == 1 && lastDate.Value.DayOfWeek == DayOfWeek.Saturday)
                                lastDate = lastDate?.AddDays(1);

                            if (lastDate != null && day.DayId == 2 && lastDate.Value.DayOfWeek == DayOfWeek.Sunday)
                                lastDate = lastDate?.AddDays(1);

                            if (lastDate != null && day.DayId == 3 && lastDate.Value.DayOfWeek == DayOfWeek.Monday)
                                lastDate = lastDate?.AddDays(1);

                            if (lastDate != null && day.DayId == 4 && lastDate.Value.DayOfWeek == DayOfWeek.Tuesday)
                                lastDate = lastDate?.AddDays(1);

                            if (lastDate != null && day.DayId == 5 && lastDate.Value.DayOfWeek == DayOfWeek.Wednesday)
                                lastDate = lastDate?.AddDays(1);

                            if (lastDate != null && day.DayId == 6 && lastDate.Value.DayOfWeek == DayOfWeek.Thursday)
                                lastDate = lastDate?.AddDays(1);

                            if (lastDate != null && day.DayId == 7 && lastDate.Value.DayOfWeek == DayOfWeek.Friday)
                                lastDate = lastDate?.AddDays(1);
                        }
                        orderObjOrderDetail.Day = lastDate;
                        orderObjOrderDetail.Status = Enums.OrderStatus.Prepering;
                    }
                }

            }
            else
            {
                foreach (var orderObjOrderDetail in orderObj.OrderDetails)
                {
                    orderObjOrderDetail.Day = orderObj.OrderStartDate;
                    orderObjOrderDetail.Status = Enums.OrderStatus.Prepering;
                }

            }
            //if (orderObj.IsPaid && orderObj)
            //{

            //}
            _orderService.Update(orderObj);
            SaveChanges();

            return orderDto;

        }

        public PagedResultsDto GetAllOrders(long branchId, int page, int pageSize)
        {
            return _orderService.GetAllOrders(branchId, page, pageSize);
        }
        public PagedResultsDto GetAllOrdersForDelivery(long branchId, int page, int pageSize)
        {
            return _orderService.GetAllOrdersForDelivery(branchId, page, pageSize);
        }
        public PagedResultsDto GetAllOrdersForPickup(long branchId, int page, int pageSize)
        {
            return _orderService.GetAllOrdersForPickup(branchId, page, pageSize);
        }
        public PagedResultsDto GetAllOrdersForKitchen(long branchId, int page, int pageSize)
        {
            return _orderService.GetAllOrdersForKitchen(branchId, page, pageSize);
        }
        public List<ItemDto> GetOrderItems(long orderId, long programId, long dayNumber)
        {
            var items = new List<ItemDto>();
            if (programId == 0)
            {
                var getOrderDetails = _orderDetailsService.Queryable().Where(x => x.OrderId == orderId);
                foreach (var orderDetail in getOrderDetails)
                {
                    if (orderDetail.Item != null)
                    {
                        var item = _itemService.Find(orderDetail.ItemId);
                        if (item != null) items.Add(Mapper.Map<ItemDto>(item));
                    }
                    else
                    {
                        var meal = _mealservice.Find(orderDetail.MealId);
                        foreach (var mealMealDetail in meal.MealDetails)
                        {
                            var item = _itemService.Find(mealMealDetail.ItemId);
                            if (item != null) items.Add(Mapper.Map<ItemDto>(item));
                        }

                    }
                }
            }
            else
            {
                var getprogramDetail = _programDetailService.Queryable().Where(x => x.ProgramId == programId && x.DayNumber == dayNumber);
                foreach (var programDetail in getprogramDetail)
                {
                    var item = _itemService.Find(programDetail.ItemId);
                    if (item != null) items.Add(Mapper.Map<ItemDto>(item));
                }

            }
            //var getOrder = _orderService.Query(x => x.OrderId == orderId).Select().FirstOrDefault();

            return items;
        }

        public OrderCallCenterDto CreateOrder(OrderCallCenterDto orderDto, long userId)
        {
            var rm = new Random();

            var order = Mapper.Map<Order>(orderDto);
            order.OrderDate = DateTime.Now;
            order.OrderStartDate = null;
            order.OrderExpiration = null;
            order.PauseStart = null;
            order.OrderCode = rm.Next(10000, 1000000).ToString();

            order.AddressId = (orderDto.AddressId == 0) ? null : orderDto.AddressId;
            var orderDetails = new List<OrderDetail>();

            if (orderDto.Items.Count != 0)
            {
                order.OrderStatus = Enums.OrderStatus.Prepering;
                order.OrderStartDate = orderDto.Day;
                foreach (var detail in orderDto.Items)
                {
                    var orderDetail = new OrderDetail();
                    orderDetail.ItemId = detail.ItemId;
                    orderDetail.Day = null;
                    orderDetail.Day = orderDto.Day;
                    orderDetail.Status = Enums.OrderStatus.Prepering;
                    orderDetails.Add(orderDetail);
                }
            }

            else if (orderDto.Meals.Count != 0)
            {
                order.OrderStatus = Enums.OrderStatus.Prepering;
                order.OrderStartDate = orderDto.Day;
                foreach (var detail in orderDto.Meals)
                {
                    var orderDetail = new OrderDetail();
                    orderDetail.MealId = detail.MealId;
                    orderDetail.Day = null;
                    orderDetail.Day = orderDto.Day;
                    orderDetail.Status = Enums.OrderStatus.Prepering;
                    orderDetails.Add(orderDetail);
                }
            }


            else if (orderDto.Programs.Count != 0)
            {
                order.IsProgram = true;
                order.OrderStartDate = orderDto.Day;

                foreach (var detail in orderDto.Programs)
                {
                    var details = _programDetailService.DistictProgramDays(detail.ProgramId);
                    var lastDate = order.OrderStartDate;
                    var excludeDays = new List<ProgExcludeDay>();
                    foreach (var progDetail in details)
                    {
                        var orderDetail = new OrderDetail();
                        orderDetail.ProgramId = detail.ProgramId;
                        orderDetail.Day = null;
                        orderDetail.DayNumber = progDetail;
                        //orderDetail.Day = orderDto.Day;

                        //----

                        if (orderDetail.ProgramId != null)
                            if (!excludeDays.Any())
                                excludeDays = _progExcludeDayService.GetExcludesDays((long)orderDetail.ProgramId).ToList();


                        if (orderDetail.DayNumber == 1)
                        {
                            orderDetail.Day = lastDate;
                            orderDetail.Status = Enums.OrderStatus.Prepering;
                            //lastDate = lastDate?.AddDays(1);
                        }

                        else
                        {

                            lastDate = lastDate?.AddDays(1);
                            foreach (var day in excludeDays)
                            {
                                if (lastDate != null && day.DayId == 1 && lastDate.Value.DayOfWeek == DayOfWeek.Saturday)
                                    lastDate = lastDate?.AddDays(1);

                                if (lastDate != null && day.DayId == 2 && lastDate.Value.DayOfWeek == DayOfWeek.Sunday)
                                    lastDate = lastDate?.AddDays(1);

                                if (lastDate != null && day.DayId == 3 && lastDate.Value.DayOfWeek == DayOfWeek.Monday)
                                    lastDate = lastDate?.AddDays(1);

                                if (lastDate != null && day.DayId == 4 && lastDate.Value.DayOfWeek == DayOfWeek.Tuesday)
                                    lastDate = lastDate?.AddDays(1);

                                if (lastDate != null && day.DayId == 5 && lastDate.Value.DayOfWeek == DayOfWeek.Wednesday)
                                    lastDate = lastDate?.AddDays(1);

                                if (lastDate != null && day.DayId == 6 && lastDate.Value.DayOfWeek == DayOfWeek.Thursday)
                                    lastDate = lastDate?.AddDays(1);

                                if (lastDate != null && day.DayId == 7 && lastDate.Value.DayOfWeek == DayOfWeek.Friday)
                                    lastDate = lastDate?.AddDays(1);
                            }
                            orderDetail.Day = lastDate;
                            orderDetail.Status = Enums.OrderStatus.Prepering;
                        }

                        orderDetails.Add(orderDetail);

                    }

                }
            }


            _orderDetailsService.InsertRange(orderDetails);
            _orderService.Insert(order);
            SaveChanges();

            return orderDto;
        }

        //public OrderCallCenterDto CreateMeal(OrderCallCenterDto orderDto, long userId)
        //{
        //    var order = Mapper.Map<Order>(orderDto);
        //    order.OrderDate = DateTime.Now;
        //    order.OrderStartDate = null;
        //    order.OrderExpiration = null;
        //    order.PauseStart = null;

        //    order.AddressId = (orderDto.AddressId == 0) ? null : orderDto.AddressId;
        //    var orderDetails = new List<OrderDetail>();

        //    foreach (var detail in orderDto.Meals)
        //    {
        //        var orderDetail = new OrderDetail();
        //        orderDetail.MealId = detail.MealId;
        //        orderDetail.Day = null;
        //        orderDetails.Add(orderDetail);
        //    }

        //    _orderDetailsService.InsertRange(orderDetails);
        //    _orderService.Insert(order);
        //    SaveChanges();

        //    return orderDto;
        //}

        public bool ChangeOrderDetailsStatus(long orderDetailsId, int status)
        {
            var returnValue = false;
            try
            {
                var orderDetailsObj = _orderDetailsService.Query(x => x.OrderDetailId == orderDetailsId).Select().FirstOrDefault();

                if (orderDetailsObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);

                var orderStatus = Enums.OrderStatus.Prepering;
                switch (status)
                {
                    case 2:
                        orderStatus = Enums.OrderStatus.Prepering;
                        break;
                    case 3:
                        orderStatus = Enums.OrderStatus.OnTheWay;
                        break;
                    case 4:
                        orderStatus = Enums.OrderStatus.Deliverd;
                        break;
                    case 5:
                        orderStatus = Enums.OrderStatus.NotDeliverd;
                        break;
                    case 6:
                        orderStatus = Enums.OrderStatus.KitchenFinished;
                        break;
                }

                orderDetailsObj.Status = orderStatus;
                _orderDetailsService.Update(orderDetailsObj);
                SaveChanges();
                returnValue = true;
                var checkIfOrderClosed = _orderService.Find(orderDetailsObj.OrderId);
                if (checkIfOrderClosed.OrderDetails.All(x => x.Status == Enums.OrderStatus.Deliverd))
                {
                    checkIfOrderClosed.OrderStatus = Enums.OrderStatus.Deliverd;
                    _orderService.Update(checkIfOrderClosed);
                    SaveChanges();
                }
            }
            catch (Exception e)
            {
                returnValue = false;
                Console.WriteLine(e);
                throw;
            }

            return returnValue;

        }
        public bool ChangeOrderStatus(long orderId, int status)
        {
            var returnValue = false;
            try
            {
                //  var orderObj = _orderService.Query(x => x.OrderId== orderId).Select().FirstOrDefault();
                var orderDetailsObj = _orderDetailsService.Queryable().Where(x => x.OrderId == orderId).ToList();

                if (!orderDetailsObj.Any()) throw new NotFoundException(ErrorCodes.ProductNotFound);

                var orderStatus = Enums.OrderStatus.Prepering;
                switch (status)
                {
                    case 2:
                        orderStatus = Enums.OrderStatus.Prepering;
                        break;
                    case 3:
                        orderStatus = Enums.OrderStatus.OnTheWay;
                        break;
                    case 4:
                        orderStatus = Enums.OrderStatus.Deliverd;
                        break;
                    case 5:
                        orderStatus = Enums.OrderStatus.NotDeliverd;
                        break;
                    case 6:
                        orderStatus = Enums.OrderStatus.KitchenFinished;
                        break;
                }
                foreach (var orderDetail in orderDetailsObj)
                {
                    orderDetail.Status = orderStatus;
                    _orderDetailsService.Update(orderDetail);
                    SaveChanges();
                }

                var checkIfOrderClosed = _orderService.Find(orderId);
                if (checkIfOrderClosed.OrderDetails.All(x => x.Status == Enums.OrderStatus.Deliverd))
                {
                    checkIfOrderClosed.OrderStatus = Enums.OrderStatus.Deliverd;
                    _orderService.Update(checkIfOrderClosed);
                    SaveChanges();
                }

                returnValue = true;

            }
            catch (Exception e)
            {
                returnValue = false;
                Console.WriteLine(e);
                throw;
            }

            return returnValue;

        }
    }
}
