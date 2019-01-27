using System.Collections.Generic;
using FitHouse.BLL.DTOs;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface IItemFacade
    {
        void AddItem(ItemDto itemDto, string path);
        ItemDto GetItem(long itemId, string language);
        PagedResultsDto GetAllItemsByCategoryId(string language, long categoryId, int page, int pageSize);
        void DeleteItem(long itemId);
        void UpdateItem(ItemDto itemDto, string path); 
        void TranslateItem(ItemDto itemDto, string language);
        void ActivateItem(long itemId);
        void DeActivateItem(long itemId);
        PagedResultsDto GetActivatedItemsByCategoryId(string language, long categoryId, int page, int pageSize);
        List<ItemProgramDto> GetAllItems();
    }
}
