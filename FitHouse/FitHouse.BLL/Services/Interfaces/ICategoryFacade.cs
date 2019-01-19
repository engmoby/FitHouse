using System;
using FitHouse.BLL.DTOs;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface ICategoryFacade
    { 
        CategoryDto GetCategory(long userId, int tenantId); 
        CategoryDto CreateCategory(CategoryDto userDto, int userId, int tenantId);
        CategoryDto EditCategory(CategoryDto userDto, int userId, int tenantId);
        PagedResultsDto GetAllCategorys(int page, int pageSize, int tenantId); 
    }
}
