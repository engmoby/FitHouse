using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitHouse.BLL.DTOs;
using FitHouse.Common;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface IProgramFacade
    {
        //ProgramDto CreateProgram(ProgramDto programDto, int userId);
        OrderDto CreateProgram(ProgramDto programDto, int userId);
        PagedResultsDto GetAllPrograms(int page, int pageSize);
        ProgramDto EditProgram(ProgramDto programDto, int userId);
        ProgramDto GetProgramDetails(long programId);
        List<ProgramDetailDto> GetProgramItems(long programId);
        ProgramDto UpdateProgramDetails(long programId, long dayCount, long mealCount,Enums.ItemType itemType,
            List<ItemSizeDto> items);
        ProgramDto UpdateProgram(ProgramDto programDto);
        ProgramDto GetProgramById(ProgramDto programDto);
        ProgramDto GetProgramById(long programId);
        PagedResultsDto GetAllActivePrograms(int page, int pageSize);
    }
}
