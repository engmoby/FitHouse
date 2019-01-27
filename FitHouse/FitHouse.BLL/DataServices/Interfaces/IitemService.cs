using System.Collections.Generic;
using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface IItemService : IService<Item>
    {
        PagedResultsDto GetAllItemsByCategoryId(string language, long categoryId, int page, int pageSize);

        List<Item> GetAllItems();
        //List<Item> GetAllItemsByRestuantId(long restuantId);
        //PagedResultsDto GetlatestItemsByRestuantId(long restuantId, int page, int pageSize);
    }
}
