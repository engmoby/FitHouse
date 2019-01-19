using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface IAreaTranslationService : IService<AreaTranslation>
    {
        PagedResultsDto GetAllAreas();
        PagedResultsDto GetAllAreasTranslation(string language);
        PagedResultsDto GetAreaTranslationByAreaId(string language, long areaId);
        AreaDto AreaTranslationByAreaId(string language, long areaId);
        bool CheckNameExist(string objName, string language, long recordId, long tenantId, long cityId);
    }
}
