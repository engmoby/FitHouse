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
        private readonly IOrderDetailsService _orderDetailsService;

        public OrderFacade(IOrderService orderService, IUnitOfWorkAsync unitOfWork, IOrderDetailsService orderDetailsService) : base(unitOfWork)
        {
            _orderService = orderService;
            _orderDetailsService = orderDetailsService;
        }

        public OrderFacade(IOrderService orderService, IOrderDetailsService orderDetailsService)
        {
            _orderService = orderService;
            _orderDetailsService = orderDetailsService;
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


        public OrderDto EditOrder(OrderDto orderDto, int userId)
        { 
            var orderObj = _orderService.Query(x => x.OrderId == orderDto.OrderId)
                .Select().FirstOrDefault();

            if (orderObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);
           // orderObj = Mapper.Map<Order>(orderDto);
            orderObj.IsPaid = orderDto.IsPaid;

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

    }
}
