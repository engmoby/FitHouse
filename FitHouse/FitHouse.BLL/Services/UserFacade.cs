using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using AutoMapper;
using Newtonsoft.Json;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;
using FitHouse.Common;
using FitHouse.Common.CustomException;
using Repository.Pattern.UnitOfWork;
using FitHouse.DAL.Entities.Model;

namespace FitHouse.BLL.Services
{
    public class UserFacade : BaseFacade, IUserFacade
    {
        private readonly IUserService _userService;
        private readonly IUserRoleService _userRoleService;
        private readonly IPermissionService _permissionService;
        private readonly IRolePermissionService _rolePermissionService;
        private readonly IAddressService _addressService;

        public UserFacade(IUserService userService, IAddressService addressService, IUnitOfWorkAsync unitOfWork, IUserRoleService userRoleService, IPermissionService permissionService, IRolePermissionService rolePermissionService) : base(unitOfWork)
        {
            _userService = userService;
            _userRoleService = userRoleService;
            _permissionService = permissionService;
            _rolePermissionService = rolePermissionService;
            _addressService = addressService;
        }

        public UserFacade(IUserService userService, IAddressService addressService, IUserRoleService userRoleService, IPermissionService permissionService, IRolePermissionService rolePermissionService)
        {
            _userService = userService;
            _userRoleService = userRoleService;
            _permissionService = permissionService;
            _rolePermissionService = rolePermissionService;
            _addressService = addressService;

        }


        public UserDto ValidateUser(string email, string password)
        {
            string encryptedPassword = PasswordHelper.Encrypt(password); ;
            var user = _userService.ValidateUser(email, encryptedPassword) ?? _userService.CheckUserIsDeleted(email, encryptedPassword);
            if (user == null) throw new ValidationException(ErrorCodes.UserNotFound);
            //  if (!user.IsActive) throw new ValidationException(ErrorCodes.YourAccountIsDisabled);
            //if (!user.IsStatic && DateTime.Now.Date < user.Package.Start.Date) throw new ValidationException(ErrorCodes.PackageNotActivated);
            var userDto = Mapper.Map<UserDto>(user);
            userDto.PermissionId = GetUserPaermissionId(user.UserId);
            return userDto;
        }


        private List<long> GetUserPaermissionId(long userId)
        {
            var userRoleId = _userRoleService.Query(x => x.UserId == userId).Select(x => x.RoleId).ToList();
            var userPermissionId = _rolePermissionService.Query(x => userRoleId.Contains(x.RoleId)).Select(x => x.PermissionId).ToList();
            return userPermissionId;
        }
        //public UserDto GetUser(long userId)
        //{
        //    return Mapper.Map<UserDto>(_userService.Find(userId));
        //}

        public UserDto ValidateByPhone(string phone)
        {
            var user = _userService.Query(x => x.Phone == phone && x.UserCode != null).Select().FirstOrDefault();
            if (user == null) throw new ValidationException(ErrorCodes.UserNotFound);

            return Mapper.Map<UserDto>(user);
        }

        public UserDto GetUser(long userId)
        {
            if (userId == 0)
            {
                return null;
            }
            var getUserInfo = _userService.Find(userId);
            getUserInfo.UserRoles = new List<UserRole>();

            var userDto = new UserDto();

            userDto.UserId = getUserInfo.UserId;
            userDto.FirstName = getUserInfo.FirstName;
            userDto.LastName = getUserInfo.LastName;
            userDto.Email = getUserInfo.Email;
            userDto.Phone = getUserInfo.Phone;
            userDto.Password = PasswordHelper.Decrypt(getUserInfo.Password);
            if (getUserInfo.BranchId != null)
            {
                userDto.BranchId = getUserInfo.BranchId;
                userDto.AreaId = getUserInfo.Branch.AreaId;
                userDto.CityId = getUserInfo.Branch.Area.CityId;
                userDto.RegionId = getUserInfo.Branch.Area.City.RegionId;
                userDto.CountryId = getUserInfo.Branch.Area.City.Region.CountryId;
            }
            var afterMap = userDto;
            afterMap.UserRoles = _userRoleService.GetUserRoleById(userId);

            return afterMap;
        }
        //public UserDto GetUser(long userId, int tenantId)
        //{
        //    if (userId == 0)
        //    {
        //        return null;
        //    }
        //    //var getRole = _userService.Find(userId);
        //    var getRole = _userService.Query(x => x.UserId == userId ).Select().FirstOrDefault();
        //    getRole.UserRoles = new List<UserRole>();

        //    var userDto = new UserDto();

        //    userDto.UserId = getRole.UserId;
        //    userDto.FirstName = getRole.FirstName;
        //    userDto.LastName = getRole.LastName;
        //    userDto.Email = getRole.Email;
        //    userDto.Phone = getRole.Phone;
        //    //userDto.AreaId = getRole.AreaId;
        //    //userDto.CountryId = getRole.AreaId.HasValue ? getRole.Area.City.Region.CountryId : 0;
        //    //userDto.RegionId = getRole.AreaId.HasValue ? getRole.Area.City.RegionId : 0;
        //    //userDto.CityId = getRole.AreaId.HasValue ? getRole.Area.CityId : 0;
        //    ////  userDto.BranchId = getRole.b.Select(x=>x.BranchId).ToList(); 
        //    userDto.Password = PasswordHelper.Decrypt(getRole.Password);


        //    var afterMap = userDto;
        //    //var afterMap = Mapper.Map<UserDto>(getRole);

        //    afterMap.UserRoles = _userRoleService.GetUserRoleById(userId, tenantId);

        //    return afterMap;
        //}


        public UserDto GetUserByAccountId(Guid userAccountId)
        {
            //return Mapper.Map<UserDto>(_userService.Query(x => x.UserAccountId == userAccountId).Select().FirstOrDefault());
            return null;
        }
        public UserDto RegisterUser(UserDto userDto, int userId)
        {
            if (GetUser(userDto.UserId) != null)
                return EditUser(userDto, userId);
            if (_userService.CheckEmailDuplicated(userDto.Email))
                throw new ValidationException(ErrorCodes.MailExist);
            if (_userService.CheckPhoneDuplicated(userDto.Phone))
                throw new ValidationException(ErrorCodes.PhoneExist);
            var userObj = Mapper.Map<User>(userDto);

            if (userDto.Code == 100)
            {
                //var lastOrDefault = _userService.Queryable().LastOrDefault();
                //if (lastOrDefault != null)
                //{
                //    var getLatestCode = lastOrDefault.Code;
                //}
                userObj.UserCode = userDto.FirstName + userDto.Phone;
            }
            userObj.FirstName = userDto.FirstName;
            userObj.LastName = userDto.LastName;
            userObj.Email = userDto.Email;
            userObj.Phone = userDto.Phone;
            userObj.Password = PasswordHelper.Encrypt(userDto.Password);
            userObj.CreationTime = DateTime.Now;
            userObj.BranchId = userDto.BranchId == 0 ? null : userDto.BranchId;
            userObj.IsActive = userDto.IsActive;
            userObj.IsDeleted = false;
            userObj.IsStatic = false;
            userObj.IsAdmin = userDto.IsAdmin;
            userObj.CreationTime = Strings.CurrentDateTime;
            userObj.CreatorUserId = userId;

            foreach (var roleper in userDto.UserRoles)
            {
                userObj.UserRoles.Add(new UserRole
                {
                    RoleId = roleper.RoleId,
                    // TenantId = tenantId
                });
            } 
      

            _userRoleService.InsertRange(userObj.UserRoles);
           _userService.Insert(userObj);
            SaveChanges();
            var address = new Address();
            if (userDto.IsAddress)
            {
                address.Floor = userDto.Floor;
                address.AppartmentNo = userDto.AppartmentNo;
                address.Description = userDto.Description;
                address.UserId = userObj.UserId;
                address.BranchId = userDto.BranchId;
                _addressService.Insert(address);
            }
            SaveChanges();

            return userDto;
        }
        public UserDto EditUserInfo(UserDto userDto, int userId)
        {
            //  var getUser = GetUser(userDto.UserId);
            var returnUser = EditUser(userDto, userId);
            return returnUser;
        }
        public UserDto EditUser(UserDto userDto, int userId)
        {
            var userObj = _userService.Query(x => x.UserId == userDto.UserId)
                .Select().FirstOrDefault();
            userObj.FirstName = userDto.FirstName ?? userObj.FirstName;
            userObj.LastName = userDto.LastName ?? userObj.LastName;
            userObj.Phone = userDto.Phone ?? userObj.Phone;
            userObj.Password = (userDto.Password != null) ? PasswordHelper.Encrypt(userDto.Password) : userObj.Password;
            userObj.IsActive = (true) ? userDto.IsActive : userObj.IsActive;
            userObj.IsDeleted = false;
            userObj.Email = userDto.Email ?? userObj.Email;
            userObj.BranchId = (userDto.BranchId != 0) ? userDto.BranchId : userObj.BranchId;

            if (userDto.UserRoles.Any())
            {
                var deleteuserRoles = new UserRole[userObj.UserRoles.Count];
                userObj.UserRoles.CopyTo(deleteuserRoles, 0);
                foreach (var roleObjRoleuserRole in deleteuserRoles)
                {
                    _userRoleService.Delete(roleObjRoleuserRole);

                }
                foreach (var roleper in userDto.UserRoles)
                {
                    userObj.UserRoles.Add(new UserRole
                    {
                        RoleId = roleper.RoleId
                    });
                }

            }

            //foreach (var branchId in userDto.BranchesId)
            //{
            //    userObj.UserBranches.Add(new UserBranch
            //    {
            //        BranchId = branchId
            //    });
            //}

            _userService.Update(userObj);
            SaveChanges();
            return userDto;
        }


    }
}
