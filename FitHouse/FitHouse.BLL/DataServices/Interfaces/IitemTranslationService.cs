using System.Collections.Generic;
using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface IItemTranslationService:IService<ItemTranslation>
    {
        bool CheckItemNameExistForCategory(string itemName, string language, long itemId, long categoryId);
        PagedResultsDto GetAllItemsByCategoryId(string language, long categoryId, int page, int pageSize); 
        PagedResultsDto GetActivatedItemsByCategoryId(string language, long categoryId, int page, int pageSize);
    }
}
