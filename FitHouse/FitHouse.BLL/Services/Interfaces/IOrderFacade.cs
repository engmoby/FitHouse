using FitHouse.BLL.DTOs;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface IOrderFacade
    { 
        OrderDto GetOrder(long userId);
         OrderDto EditOrder(OrderDto userDto, int userId);
        PagedResultsDto GetAllOrders(long branchId, int page, int pageSize);
    }
}
