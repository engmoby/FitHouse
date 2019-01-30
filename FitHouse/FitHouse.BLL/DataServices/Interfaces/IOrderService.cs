using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface IOrderService : IService<Order>
    {
        PagedResultsDto GetAllOrders(long branchId, int page, int pageSize);
    }
}
