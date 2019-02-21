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
    public class CategoryService : Service<Category>, ICategoryService
    {
        public CategoryService(IRepositoryAsync<Category> repository) : base(repository)
        {
            _repository = repository;
        }

        public PagedResultsDto GetAllCategorys(int page, int pageSize)
        {
            var query = Queryable().Where(x => !x.IsDeleted).OrderBy(x => x.CategoryId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();
            var getList = query.OrderBy(x => x.CategoryId).Skip((page - 1) * pageSize).Take(pageSize).ToList();
            results.Data = Mapper.Map<List<Category>, List<CategoryDto>>(getList);

            return results;
        }

        public List<Category> GetAllCategs()
        {
            var categories = _repository.Query(x => !x.IsDeleted && x.IsActive).Select().ToList();
            return categories;
        }
    }
}