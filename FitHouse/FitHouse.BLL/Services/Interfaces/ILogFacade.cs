using FitHouse.BLL.DTOs;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface ILogFacade
    { 
      
        LogDto CreateLog(LogDto userDto);  
        PagedResultsDto GetAllLogs(int page, int pageSize); 
    }
}
