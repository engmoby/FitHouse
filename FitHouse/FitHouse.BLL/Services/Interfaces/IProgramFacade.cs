﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitHouse.BLL.DTOs;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface IProgramFacade
    {
        ProgramDto CreateProgram(ProgramDto programDto, int userId);
    }
}
