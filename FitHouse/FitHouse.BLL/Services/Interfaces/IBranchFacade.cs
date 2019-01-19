using System;
using FitHouse.BLL.DTOs;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface IBranchFacade
    {
        BranchDto GetBranch(long branchId, int tenantId);
        BranchDto CreateBranch(BranchDto userDto, int userId, int tenantId);
        BranchDto EditBranch(BranchDto userDto, int userId, int tenantId);
        PagedResultsDto GetAllBranchs(int page, int pageSize, int tenantId); 
    }
}
