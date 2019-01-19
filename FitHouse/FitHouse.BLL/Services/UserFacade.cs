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
        private readonly IPackageService _packageService;
        private readonly IUserBranchService _userBranchService; 

        public UserFacade(IUserService userService, IUnitOfWorkAsync unitOfWork, IUserRoleService userRoleService, IPermissionService permissionService, IRolePermissionService rolePermissionService , IUserBranchService userBranchService ) : base(unitOfWork)
        {
            _userService = userService;
            _userRoleService = userRoleService;
            _permissionService = permissionService;
            _rolePermissionService = rolePermissionService; 
            _userBranchService = userBranchService; 
        }

        public UserFacade(IUserService userService, IUserRoleService userRoleService, IPermissionService permissionService, IRolePermissionService rolePermissionService,   IUserBranchService userBranchService )
        {
            _userService = userService;
            _userRoleService = userRoleService;
            _permissionService = permissionService;
            _rolePermissionService = rolePermissionService; 
            _userBranchService = userBranchService; 
        }


        public UserDto ValidateUser(string email, string password)
        {
            string encryptedPassword = PasswordHelper.Encrypt(password);;
            var user = _userService.ValidateUser(email, encryptedPassword) ?? _userService.CheckUserIsDeleted(email, encryptedPassword);
            if (user == null) throw new ValidationException(ErrorCodes.UserNotFound);
            if (!user.IsStatic && DateTime.Now.Date > user.Package.End.Date ) throw new ValidationException(ErrorCodes.PackageExpired);
            if (!user.IsStatic && DateTime.Now.Date < user.Package.Start.Date) throw new ValidationException(ErrorCodes.PackageNotActivated);
            var userDto = Mapper.Map<UserDto>(user);
            userDto.PermissionId = GetUserPaermissionId(user.UserId);
            return userDto;
        }
        

        private List<long> GetUserPaermissionId(long userId)
        {
            var userRoleId = _userRoleService.Query(x => x.UserId == userId).Select(x => x.RoleId).ToList();
            var userPermissionId = _rolePermissionService.Query(x=>userRoleId.Contains(x.RoleId)).Select(x=>x.PermissionId).ToList();
            return userPermissionId;
        }
        //public UserDto GetUser(long userId)
        //{
        //    return Mapper.Map<UserDto>(_userService.Find(userId));
        //}
        public UserDto GetUser(long userId)
        {
            if (userId == 0)
            {
                return null;
            }
           var getRole = _userService.Find(userId); 
            getRole.UserRoles = new List<UserRole>(); 

            var userDto = new UserDto();
             
            userDto.UserId = getRole.UserId;
            userDto.FirstName = getRole.FirstName;
            userDto.LastName = getRole.LastName;
            userDto.Email = getRole.Email;
            userDto.Phone = getRole.Phone;
            userDto.UserAccountId = getRole.UserAccountId;
            userDto.TenantId = getRole.TenantId;
            userDto.Password = PasswordHelper.Decrypt(getRole.Password);


            var afterMap = userDto;
            //var afterMap = Mapper.Map<UserDto>(getRole);

            afterMap.UserRoles = _userRoleService.GetUserRoleById(userId, userDto.TenantId);

            return afterMap;
        }
        public UserDto GetUser(long userId, int tenantId)
        {
            if (userId == 0)
            {
                return null;
            }
            //var getRole = _userService.Find(userId);
            var getRole = _userService.Query(x => x.UserId == userId && x.TenantId == tenantId).Select().FirstOrDefault();
            getRole.UserRoles = new List<UserRole>(); 

            var userDto = new UserDto();
             
            userDto.UserId = getRole.UserId;
            userDto.FirstName = getRole.FirstName;
            userDto.LastName = getRole.LastName;
            userDto.Email = getRole.Email;
            userDto.Phone = getRole.Phone; 
            userDto.AreaId = getRole.AreaId;
            userDto.CountryId = getRole.AreaId.HasValue ? getRole.Area.City.Region.CountryId : 0;
            userDto.RegionId = getRole.AreaId.HasValue ? getRole.Area.City.RegionId : 0;
            userDto.CityId = getRole.AreaId.HasValue ? getRole.Area.CityId : 0;
          //  userDto.BranchId = getRole.b.Select(x=>x.BranchId).ToList(); 
            userDto.Password = PasswordHelper.Decrypt(getRole.Password);


            var afterMap = userDto;
            //var afterMap = Mapper.Map<UserDto>(getRole);

            afterMap.UserRoles = _userRoleService.GetUserRoleById(userId, tenantId);

            return afterMap;
        }


        public UserDto GetUserByAccountId(Guid userAccountId)
        {
            return Mapper.Map<UserDto>(_userService.Query(x => x.UserAccountId == userAccountId).Select().FirstOrDefault());
        }
        public UserDto RegisterUser(UserDto userDto, int userId, int tenantId)
        {
            if (GetUser(userDto.UserId, tenantId) != null)
            {
                return EditUser(userDto, userId, tenantId);
            }
            if (_userService.CheckEmailDuplicated(userDto.Email, tenantId))
            {
                throw new ValidationException(ErrorCodes.MailExist);
            }
            if (_userService.CheckPhoneDuplicated(userDto.Phone, tenantId))
            {
                throw new ValidationException(ErrorCodes.PhoneExist);
            }


            var userObj = Mapper.Map<User>(userDto);
            userObj.FirstName = userDto.FirstName;
            // userObj.UserAccountId = Guid.NewGuid();
            userObj.LastName = userDto.LastName;
            userObj.Email = userDto.Email;
            userObj.Phone = userDto.Phone;
            userObj.Password = PasswordHelper.Encrypt(userDto.Password);
            userObj.CreationTime = DateTime.Now;
            userObj.IsActive = userDto.IsActive;
            userObj.IsDeleted = false; 
            userObj.TenantId = tenantId;
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
            //Package package;

            //var packages = _packageService.Query(x => x.TenantId == tenantId).Include(x => x.Users).Select().ToList();
            //package = packages.OrderBy(x => x.Start).FirstOrDefault();
            //int count = 1;
            //while (true)
            //{
            //    if (package.MaxNumberOfUsers > package.Users.Count(x => !x.IsDeleted))
            //    {
            //        break;
            //    }
            //    //else
            //    //{
            //    //    consumedWaiters = consumedWaiters - package.MaxNumberOfWaiters;
            //    //}

            //    package = packages.OrderBy(x => x.Start).Skip(count).FirstOrDefault();
            //    count++;
            //}
            //userObj.PackageId = package.PackageId;
             
            _userBranchService.InsertRange(userObj.UserBranches);
            _userRoleService.InsertRange(userObj.UserRoles);
            _userService.Insert(userObj);
            SaveChanges(); 
            var admin = _userService.Query(x => x.IsStatic && x.TenantId == tenantId).Select().FirstOrDefault();
           
            return userDto;
        }

        public UserDto EditUserInfo(UserDto userDto, int userId, int tenantId)
        {
            //  var getUser = GetUser(userDto.UserId);
            var returnUser = EditUser(userDto, userId, tenantId);
            return returnUser;
        }
        public UserDto EditUser(UserDto userDto, int userId, int tenantId)
        { 
            var userObj = _userService.Query(x => x.UserId == userDto.UserId && x.TenantId == tenantId)
                .Select().FirstOrDefault();  
            userObj.FirstName = userDto.FirstName;
            userObj.LastName = userDto.LastName;
            userObj.Phone = userDto.Phone;
            userObj.Password = (userDto.Password != null) ? PasswordHelper.Encrypt(userDto.Password) : userObj.Password;
            userObj.IsActive = userDto.IsActive;
            userObj.IsDeleted = false;
            userObj.Email = userDto.Email; 
            userObj.AreaId = userDto.AreaId; 


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
            var deleteuserBranches = new UserBranch[userObj.UserBranches.Count];
            userObj.UserBranches.CopyTo(deleteuserBranches, 0);
            foreach (var userBranch in deleteuserBranches)
            {
                _userBranchService.Delete(userBranch);

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
