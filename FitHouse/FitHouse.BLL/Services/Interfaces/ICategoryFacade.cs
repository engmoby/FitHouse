using System;
using System.Collections.Generic;
using FitHouse.BLL.DTOs;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface ICategoryFacade
    { 
        CategoryDto GetCategory(long categoryId); 
        CategoryDto CreateCategory(CategoryDto userDto, int userId);
        CategoryDto EditCategory(CategoryDto userDto, int userId);
        PagedResultsDto GetAllCategorys(int page, int pageSize);
        List<CategoryProgramDto> GetAllCategs();
    }
}
