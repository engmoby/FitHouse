using System;
using FitHouse.BLL.DTOs;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface ICategoryFacade
    { 
        CategoryDto GetCategory(long userId); 
        CategoryDto CreateCategory(CategoryDto userDto, int userId);
        CategoryDto EditCategory(CategoryDto userDto, int userId);
        PagedResultsDto GetAllCategorys(int page, int pageSize); 
    }
}
