using System.Collections.Generic;
using System.Web.Http;
using AutoMapper;
using FitHouse.API.Infrastructure;
using FitHouse.API.Models;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;

namespace FitHouse.API.Controllers
{
    public class OrderController : BaseApiController
    {
        private readonly IOrderFacade _orderFacade;
        private readonly IUserFacade _userFacade;
        public OrderController(IOrderFacade orderFacade, IUserFacade userFacade)
        {
            _orderFacade = orderFacade;
            _userFacade = userFacade;
        }

        [Route("api/Orders/CreateOrder", Name = "CreateOrder")]
        [HttpPost]
        public IHttpActionResult CreateOrder([FromBody] OrderCallCenterModel orderModel)
        {

            var order = _orderFacade.CreateOrder(Mapper.Map<OrderCallCenterDto>(orderModel), UserId);
            return Ok(order);
        }

        //[Route("api/Orders/CreateMeal", Name = "CreateMeal")]
        //[HttpPost]
        //public IHttpActionResult CreateMeal([FromBody] OrderCallCenterModel orderModel)
        //{

        //    var order = _orderFacade.CreateMeal(Mapper.Map<OrderCallCenterDto>(orderModel), UserId);
        //    return Ok(order);
        //}

        [Route("api/Orders/GetAllOrders", Name = "GetAllOrders")]
        [HttpGet]
        public IHttpActionResult GetAllOrders(int page = Page, int pagesize = PageSize)
        {
            var getUserInfo = _userFacade.GetUser(UserId);
            long branch = 0;
            if (getUserInfo.BranchId != null) 
                branch = (long)getUserInfo.BranchId; 

            PagedResultsDto orderObj = _orderFacade.GetAllOrders(branch, page, pagesize);
            var data = Mapper.Map<List<OrderModel>>(orderObj.Data);
            return PagedResponse("GetAllOrders", page, pagesize, orderObj.TotalCount, data);
        }
         
        [Route("api/Orders/EditOrder", Name = "EditOrder")]
        [HttpPost]
        public IHttpActionResult EditOrder([FromBody] OrderModel orderModel)
        {
            //if (!orderModel.IsActive || orderModel.IsDeleted)
            //{
            //    var checkIfUsed = _userOrderService.Queryable().Where(x => x.OrderId == orderModel.OrderId);
            //    if (checkIfUsed.Any())
            //    {
            //        throw new ValidationException(ErrorCodes.RecordIsUsedInAnotherModule);
            //    }
            //}

            var reurnOrder = _orderFacade.EditOrder(Mapper.Map<OrderDto>(orderModel), UserId);

            return Ok(reurnOrder);
        }


        [Route("api/Orders/GetOrderById", Name = "GetOrderById")]
        [HttpGet]
        public IHttpActionResult GetOrderById(long OrderId)
        {
            var reurnOrder = _orderFacade.GetOrder(OrderId);
            return Ok(reurnOrder);
        }
    }

}