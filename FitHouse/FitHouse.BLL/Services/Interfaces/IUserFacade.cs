using System;
using System.Collections.Generic;
using FitHouse.BLL.DTOs;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface IUserFacade
    {
        UserDto ValidateUser(string email, string password);
        //UserDto GetUser(long userId);
        UserDto GetUser(long userId);
        UserDto GetUserByAccountId(Guid userAccountId);
        UserDto EditUserInfo(UserDto userDto, int userId);
        UserDto RegisterUser(UserDto userDto, int userId);
        //void AddNewGlobalUser(AdminDto adminDto);
        //void UpdateGlobalUser(AdminDto adminDto); 
    }
}
