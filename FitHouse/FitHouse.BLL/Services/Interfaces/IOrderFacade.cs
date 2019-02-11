using System.Collections.Generic;
using FitHouse.BLL.DTOs;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface IOrderFacade
    {
        OrderDto GetOrder(long userId);
        OrderFullDto GetFullOrder(long orderId);
        OrderDto EditOrder(OrderDto userDto, int userId);
        PagedResultsDto GetAllOrders(long branchId, int page, int pageSize);
        PagedResultsDto GetAllOrdersForDelivery(long branchId, int page, int pageSize);
        PagedResultsDto GetAllOrdersForKitchen(long branchId, int page, int pageSize);
        PagedResultsDto GetAllOrdersForPickup(long branchId, int page, int pageSize);
        List<ItemDto> GetOrderItems(long programId, long dayNumber);
        OrderCallCenterDto CreateOrder(OrderCallCenterDto order, long userId);

        bool ChangeorderStatus(long orderDetailsId, int status);
        //OrderCallCenterDto CreateMeal(OrderCallCenterDto orderDto, long userId);
    }
}
