﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface IProgramDetailService : IService<ProgramDetail>
    {
        List<ProgramDetail> GetProgramDetails(long programId);
        List<long> DistictProgramDays(long programId);
    }
}
