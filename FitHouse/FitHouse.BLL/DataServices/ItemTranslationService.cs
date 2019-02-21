using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace FitHouse.BLL.DataServices
{
    public class ItemTranslationService:Service<ItemTranslation>,IItemTranslationService
    {
        public ItemTranslationService(IRepositoryAsync<ItemTranslation> repository):base(repository)
        {
            
        }
        public bool CheckItemNameExistForCategory(string itemName, string language, long itemId, long categoryId)
        {
            return Queryable()
                .Any(x => x.Language.ToLower() == language.ToLower() &&
                          x.Title.ToLower() == itemName.ToLower() &&
                          x.ItemId != itemId && x.Item.CategoryId == categoryId  && !x.Item.IsDeleted);
        }

        public PagedResultsDto GetAllItemsByCategoryId(string language, long categoryId, int page, int pageSize)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Item.IsDeleted && x.Language.ToLower() == language.ToLower() && x.Item.CategoryId == categoryId).Select(x => x.Item).Count(x => !x.IsDeleted);
            List<Item> items;
            if (pageSize > 0)
                items = _repository.Query(x => !x.Item.IsDeleted && x.Language.ToLower() == language.ToLower() && x.Item.CategoryId == categoryId).Select(x => x.Item)
                    .OrderBy(x => x.ItemId).Skip((page - 1) * pageSize)
                    .Take(pageSize).ToList();
            else
                items = _repository.Query(x => !x.Item.IsDeleted && x.Language.ToLower() == language.ToLower() && x.Item.CategoryId == categoryId).Select(x => x.Item)
                    .OrderBy(x => x.ItemId).ToList();
            results.Data = Mapper.Map<List<Item>, List<ItemDto>>(items); 
            return results;
        }

        //public PagedResultsDto GetAllActiveItemsByCategoryId(string language, long categoryId, int page, int pageSize)
        //{
        //    PagedResultsDto results = new PagedResultsDto();
        //    results.TotalCount = _repository.Query(x => !x.Item.IsDeleted &&x.Item.IsActive && x.Language.ToLower() == language.ToLower() && x.Item.CategoryId == categoryId).Select(x => x.Item).Count(x => !x.IsDeleted);
        //    List<Item> items;
        //    if (pageSize > 0)
        //        items = _repository.Query(x => !x.Item.IsDeleted && x.Item.IsActive && x.Language.ToLower() == language.ToLower() && x.Item.CategoryId == categoryId).Select(x => x.Item)
        //            .OrderBy(x => x.ItemId).Skip((page - 1) * pageSize)
        //            .Take(pageSize).ToList();
        //    else
        //        items = _repository.Query(x => !x.Item.IsDeleted && x.Item.IsActive  && x.Language.ToLower() == language.ToLower() && x.Item.CategoryId == categoryId).Select(x => x.Item)
        //            .OrderBy(x => x.ItemId).ToList();
        //    results.Data = Mapper.Map<List<Item>, List<ItemDto>>(items);
        //    return results;
        //}
        public PagedResultsDto GetActivatedItemsByCategoryId(string language, long categoryId, int page, int pageSize)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Item.IsDeleted && x.Item.IsActive && x.Language.ToLower() == language.ToLower() && x.Item.CategoryId == categoryId).Select(x => x.Item).Count(x => !x.IsDeleted);
            List<Item> items;
            if (pageSize > 0)
                items = _repository.Query(x => !x.Item.IsDeleted && x.Item.IsActive && x.Language.ToLower() == language.ToLower() && x.Item.CategoryId == categoryId).Select(x => x.Item)
                    .OrderBy(x => x.ItemId).Skip((page - 1) * pageSize)
                    .Take(pageSize).ToList();
            else
                items = _repository.Query(x => !x.Item.IsDeleted && x.Item.IsActive && x.Language.ToLower() == language.ToLower() && x.Item.CategoryId == categoryId).Select(x => x.Item)
                    .OrderBy(x => x.ItemId).ToList();
            results.Data = Mapper.Map<List<Item>, List<ItemDto>>(items); 
            return results;
        } 
    }
}
