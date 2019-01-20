using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface IBranchTranslationService : IService<BranchTranslation>
    {
        PagedResultsDto GetAllBranchs();
        PagedResultsDto GetAllBranchsTranslation(string language);
        PagedResultsDto GetBranchTranslationByBranchId(string language, long branchId);
        BranchDto BranchTranslationByBranchId(string language, long branchId);
        bool CheckNameExist(string objName, string language, long recordId, long areaId);
    }
}
