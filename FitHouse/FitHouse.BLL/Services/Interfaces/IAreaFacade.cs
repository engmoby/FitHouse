using FitHouse.BLL.DTOs;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface IAreaFacade
    { 
        AreaDto GetArea(long userId); 
        AreaDto CreateArea(AreaDto userDto, int userId); 
        AreaDto EditArea(AreaDto userDto, int userId);
        PagedResultsDto GetAllAreas(long cityId,int page, int pageSize);
        AreaDto GetAllAreasByUserId(long userId);
        PagedResultsDto GetAllAreasForUser(long userId);
    }
}
