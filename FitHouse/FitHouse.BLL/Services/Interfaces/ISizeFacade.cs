using FitHouse.BLL.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface ISizeFacade
    {
        PagedResultsDto GetAllSizes(int page, int pageSize);
        void AddSize(SizeDto sizeDto);
        SizeDto GetSize(long sizeId);
        void UpdateSize(SizeDto sizeDto);
        void DeleteSize(long sizeId);
    }
}
