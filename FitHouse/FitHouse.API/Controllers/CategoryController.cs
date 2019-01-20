using System.Collections.Generic;
using System.Web.Http;
using AutoMapper;
using FitHouse.API.Infrastructure;
using FitHouse.API.Models;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;

namespace FitHouse.API.Controllers
{
    public class CategoryController : BaseApiController
    { 
        private readonly ICategoryFacade _categoryFacade;
        public CategoryController(ICategoryFacade categoryFacade)
        {
            _categoryFacade = categoryFacade; 
        }

        [Route("api/Category/GetAllCategories", Name = "GetAllCategories")]
        [HttpGet]
        public IHttpActionResult GetAllCategories(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto categoryObj = _categoryFacade.GetAllCategorys(page, pagesize);
            var data = Mapper.Map<List<CategoryModel>>(categoryObj.Data);
            return PagedResponse("GetAllCategories", page, pagesize, categoryObj.TotalCount, data, categoryObj.IsParentTranslated);
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
            var reurnCategory = _categoryFacade.GetCategory(CategoryId);
            return Ok(reurnCategory);
        }
    }

}