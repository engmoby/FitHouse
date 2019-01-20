using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface IBranchService : IService<Branch>
    {
         PagedResultsDto GetAllBranchs(int page, int pageSize);
    }
}
