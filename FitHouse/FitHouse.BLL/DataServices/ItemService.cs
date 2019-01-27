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
    public class ItemService : Service<Item>, IItemService
    {
        public ItemService(IRepositoryAsync<Item> repository) : base(repository)
        {

        }
        public PagedResultsDto GetAllItemsByCategoryId(string language, long categoryId, int page, int pageSize)
        {
            var query = Queryable().Where(x => x.CategoryId == categoryId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();
            var getList = query.OrderBy(x => x.ItemId).Skip((page - 1) * pageSize).Take(pageSize).ToList();
            results.Data = Mapper.Map<List<Item>, List<ItemTranslation>>(getList, opt =>
            {
                opt.BeforeMap((src, dest) =>
                    {
                        foreach (Item menu in src)
                        {
                            menu.ItemTranslations = menu.ItemTranslations.Where(x => x.Language.ToLower() == language.ToLower()).ToList();
                        }

                    }
                );
            });
            return results;
        }

        public List<Item> GetAllItems()
        {
            var items = _repository.Query(x => x.IsDeleted != true).Select().ToList();
            return items;
        }

        //public PagedResultsDto GetlatestItemsByRestuantId(long restuantId, int page, int pageSize)
        //{
        //    var query = Queryable().Where(x => x.Category.RestaurantId == restuantId);

        //    PagedResultsDto results = new PagedResultsDto();
        //    results.TotalCount = query.Select(x => x).Count();
        //    var getList = query.OrderBy(x => x.ItemId).Skip((page - 1) * pageSize).Take(pageSize).ToList();
        //    results.Data = getList;
        //    return results;
        //}

        //public List<Item> GetAllItemsByRestuantId(long restuantId)
        //{
        //    var query = Queryable().Where(x => x.Category.RestaurantId == restuantId && !x.IsDeleted);

        //    return query.ToList();
        //}
    }
}
