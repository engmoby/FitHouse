using System;
using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Service.Pattern;

namespace FitHouse.BLL.DataServices.Interfaces
{
    public interface IUserService:IService<User>
    {
        User ValidateUser(string email, string password );
        bool CheckEmailDuplicated(string email);
        bool CheckPhoneDuplicated(string phone);
        User CheckUserIsDeleted(string firstName, string password);
        PagedResultsDto GetAllUsers(int page, int pageSize); 
        PagedResultsDto GetAllClients(int page, int pageSize); 
    }
}
