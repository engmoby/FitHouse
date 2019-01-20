using System;
using FitHouse.BLL.DTOs;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface IBranchFacade
    {
        BranchDto GetBranch(long branchId);
        BranchDto CreateBranch(BranchDto userDto, int userId);
        BranchDto EditBranch(BranchDto userDto, int userId);
        PagedResultsDto GetAllBranchs(int page, int pageSize); 
    }
}
