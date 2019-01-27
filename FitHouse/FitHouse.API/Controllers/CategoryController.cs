using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;
using AutoMapper;
using FitHouse.API.Infrastructure;
using FitHouse.API.Models;
using FitHouse.API.Providers;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;
using FitHouse.Common;
using FitHouse.BLL.Services;

namespace FitHouse.API.Controllers
{
    public class CategoryController : BaseApiController
    { 
        private readonly ICategoryFacade _categoryFacade;
        private ItemFacade _itemFacade;
        public CategoryController(ICategoryFacade categoryFacade, ItemFacade itemFacade)
        {
            _categoryFacade = categoryFacade;
            _itemFacade = itemFacade;
        }

        [Route("api/Category/GetAllCategories", Name = "GetAllCategories")]
        [HttpGet]
        public IHttpActionResult GetAllCategories(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto categoryObj = _categoryFacade.GetAllCategorys(page, pagesize);
            var data = Mapper.Map<List<CategoryModel>>(categoryObj.Data);
            return PagedResponse("GetAllCategories", page, pagesize, categoryObj.TotalCount, data );
        }

        [Route("api/Category/GetAllCategs", Name = "GetAllCategs")]
        [HttpGet]
        public IHttpActionResult GetAllCategs()
        {
            var categories = Mapper.Map<List<CategoryProgramModel>>(_categoryFacade.GetAllCategs());

            return Ok(categories);
        }

        [Route("api/Category", Name = "CreateCategory")]
        [HttpPost]
        public IHttpActionResult CreateCategory([FromBody] CategoryModel categoryModel)
        {

            var reurnCategory = _categoryFacade.CreateCategory(Mapper.Map<CategoryDto>(categoryModel),UserId);

            return Ok(reurnCategory);
        }


        [Route("api/Category/EditCategory", Name = "EditCategory")]
        [HttpPost]
        public IHttpActionResult EditCategory([FromBody] CategoryModel categoryModel)
        {
            var reurnCategory = _categoryFacade.EditCategory(Mapper.Map<CategoryDto>(categoryModel), UserId);

            return Ok(reurnCategory);
        }


        [Route("api/Category/GetCategoryById", Name = "GetCategoryById")]
        [HttpGet]
        public IHttpActionResult GetCategoryById(long categoryId)
        {
            var reurnCategory = _categoryFacade.GetCategory(categoryId);
            return Ok(reurnCategory);
        }


        //[AuthorizeRoles(Enums.RoleType.RestaurantAdmin)]
        [Route("api/Categories/{categoryId:long}/Items", Name = "GetAllItemsForCategory")]
        [HttpGet]
        [ResponseType(typeof(List<ItemModel>))]
        public IHttpActionResult GetAllItemsForCategory(long categoryId, int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto items;
            //items = UserRole == Enums.RoleType.RestaurantAdmin.ToString() ? _itemFacade.GetAllItemsByCategoryId(Language, categoryId, page, pagesize) : _itemFacade.GetActivatedItemsByCategoryId(Language, categoryId, page, pagesize);
            items = _itemFacade.GetAllItemsByCategoryId(Language, categoryId, page, pagesize); 
            var data = Mapper.Map<List<ItemModel>>(items.Data);
            foreach (var item in data)
            {
                //item.ImageUrl = Url.Link("ItemImage", new { item.CategoryId, item.ItemId });
            }
            return PagedResponse("GetAllItemsForCategory", page, pagesize, items.TotalCount, data);
        }

       

    }

}