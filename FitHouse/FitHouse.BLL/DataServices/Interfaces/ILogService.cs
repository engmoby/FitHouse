using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface ILogService : IService<Log>
    {
         PagedResultsDto GetAllLogs(int page, int pageSize);
    }
}
