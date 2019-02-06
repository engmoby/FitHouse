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
        private readonly IProgramService _programService;
        private readonly IOrderDetailsService _orderDetailsService;
        private readonly IProgramDetailService _programDetailService;

        public OrderFacade(IOrderService orderService, IUnitOfWorkAsync unitOfWork,
            IOrderDetailsService orderDetailsService, IProgramService programService, IProgramDetailService programDetailService, IItemService itemService) : base(unitOfWork)
        {
            _orderService = orderService;
            _orderDetailsService = orderDetailsService;
            _programService = programService;
            _programDetailService = programDetailService;
            _itemService = itemService;
        }

        //public OrderFacade(IOrderService orderService, IProgramDetailService programDetailService, IUnitOfWorkAsync unitOfWork,
        //    IOrderDetailsService orderDetailsService) : base(unitOfWork)
        //{
        //    _orderService = orderService;
        //    _orderDetailsService = orderDetailsService;
        //    _programDetailService = programDetailService;
        //}

        public OrderFacade(IOrderService orderService, IOrderDetailsService orderDetailsService, IProgramService programService, IItemService itemService)
        {
            _orderService = orderService;
            _orderDetailsService = orderDetailsService;
            _programService = programService;
            _itemService = itemService;
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
            var orderObj = _orderService.Query(x => x.OrderId == orderDto.OrderId)
                .Select().FirstOrDefault();

            if (orderObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);
            // orderObj = Mapper.Map<Order>(orderDto);
            orderObj.IsPaid = orderDto.IsPaid;
            orderObj.OrderStartDate = orderDto.OrderStartDate ?? orderObj.OrderStartDate;

            //var deletePermissions = new OrderDetail[orderObj.OrderDetails.Count];
            //orderObj.OrderDetails.CopyTo(deletePermissions, 0);

            //foreach (var orderObjOrderDetail in deletePermissions)
            //{
            //    _orderDetailsService.Delete(orderObjOrderDetail);

            //}
            //foreach (var orderper in orderDto.OrderDetails)
            //{
            //    orderObj.OrderDetails.Add(new OrderDetail
            //    {
            //        ItemId = orderper.ItemId,
            //        MealId = orderper.MealId,
            //        ProgramId = orderper.ProgramId,
            //        DayNumber = orderper.DayNumber,
            //        Day = orderper.Day,
            //        Status = orderper.Status,
            //        NotDeliverdNote = orderper.NotDeliverdNote, 
            //    });
            //}
            // _orderDetailsService.InsertRange(orderObj.OrderDetails);
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
        public PagedResultsDto GetAllOrdersForKitchen(long branchId, int page, int pageSize)
        {
            return _orderService.GetAllOrdersForKitchen(branchId, page, pageSize);
        }
        public List<ItemDto> GetOrderItems(long programId, long dayNumber)
        {
            var items = new List<ItemDto>();
            if (programId == 0)
                return null;
            //var getOrder = _orderService.Query(x => x.OrderId == orderId).Select().FirstOrDefault();
            var getprogramDetail = _programDetailService.Queryable().Where(x=>x.ProgramId== programId && x.DayNumber==dayNumber);
            foreach (var programDetail in getprogramDetail)
            { 
                var item= _itemService.Find(programDetail.ItemId);
                if (item != null) items.Add(Mapper.Map<ItemDto>(item));
            }

            return items;
        }

        public OrderCallCenterDto CreateOrder(OrderCallCenterDto orderDto, long userId)
        {
            var order = Mapper.Map<Order>(orderDto);
            order.OrderDate = DateTime.Now;
            order.OrderStartDate = null;
            order.OrderExpiration = null;
            order.PauseStart = null;

            order.AddressId = (orderDto.AddressId == 0) ? null : orderDto.AddressId;
            var orderDetails = new List<OrderDetail>();

            if (orderDto.Items.Count != 0)
            {
                foreach (var detail in orderDto.Items)
                {
                    var orderDetail = new OrderDetail();
                    orderDetail.ItemId = detail.ItemId;
                    orderDetail.Day = null;
                    orderDetails.Add(orderDetail);
                }
            }

            else if (orderDto.Meals.Count != 0)
            {
                foreach (var detail in orderDto.Meals)
                {
                    var orderDetail = new OrderDetail();
                    orderDetail.MealId = detail.MealId;
                    orderDetail.Day = null;
                    orderDetails.Add(orderDetail);
                }
            }


            else if (orderDto.Programs.Count != 0)
            {
                foreach (var detail in orderDto.Programs)
                {
                    var details = _programDetailService.DistictProgramDays(detail.ProgramId);
                    foreach (var progDetail in details)
                    {
                        var orderDetail = new OrderDetail();
                        orderDetail.ProgramId = detail.ProgramId;
                        orderDetail.Day = null;
                        orderDetail.DayNumber = progDetail;
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

        public bool ChangeorderStatus(long orderDetailsId, int status)
        {
            var returnValue = false;
            try
            {
                var orderDetailsObj = _orderDetailsService.Query(x => x.OrderDetailId == orderDetailsId).Select().FirstOrDefault();

                if (orderDetailsObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);

                var orderStatus = Enums.OrderStatus.Prepering;
                if (status == 2)
                    orderStatus = Enums.OrderStatus.Prepering;
                else if (status == 3)
                    orderStatus = Enums.OrderStatus.OnTheWay;
                else if (status == 4)
                    orderStatus = Enums.OrderStatus.Deliverd;
                else if (status == 5)
                    orderStatus = Enums.OrderStatus.NotDeliverd;
                else if (status == 6)
                    orderStatus = Enums.OrderStatus.KitchenFinished;

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

    }
}
