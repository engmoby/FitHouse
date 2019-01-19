﻿using System.Collections.Generic;
using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface ICategoryService : IService<Category>
    {
         PagedResultsDto GetAllCategorys(int page, int pageSize, int tenantId); 
    }
}
