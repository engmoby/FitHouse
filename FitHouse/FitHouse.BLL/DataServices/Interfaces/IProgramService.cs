﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface IProgramService : IService<Program>
    {
        PagedResultsDto GetAllPrograms(int page, int pageSize);
        PagedResultsDto GetAllActivePrograms(int page, int pageSize);
    }
}
