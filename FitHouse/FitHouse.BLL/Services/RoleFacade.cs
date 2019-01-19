﻿using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;
using FitHouse.Common;
using FitHouse.Common.CustomException;
using Repository.Pattern.UnitOfWork;
using FitHouse.DAL.Entities.Model;

namespace FitHouse.BLL.Services
{
    public class RoleFacade : BaseFacade, IRoleFacade
    {
        private readonly IRoleService _roleService;
        private readonly IRolePermissionService _rolePermissionService;
        private readonly IRoleTranslationService _typeTranslationService;

        public RoleFacade(IRoleService roleService, IUnitOfWorkAsync unitOfWork, IRoleTranslationService typeTranslationService, IRolePermissionService rolePermissionService) : base(unitOfWork)
        {
            _roleService = roleService;
            _typeTranslationService = typeTranslationService;
            _rolePermissionService = rolePermissionService;
        }

        public RoleFacade(IRoleService roleService, IRoleTranslationService typeTranslationService, IRolePermissionService rolePermissionService)
        {
            _roleService = roleService;
            _typeTranslationService = typeTranslationService;
            _rolePermissionService = rolePermissionService;
        }

        public RoleDto GetRole(long roleId, int tenantId)
        {
            if (roleId == 0)
            {
                return null;
            }
            //var getRole = _roleService.Find(roleId);

            var getRole = _roleService.Query(x => x.RoleId == roleId  ).Select().FirstOrDefault();

            var afterMap = Mapper.Map<RoleDto>(getRole);

            afterMap.Permissions = _rolePermissionService.GetRolePermissionById(roleId, tenantId);

            return afterMap;
        }

        public RoleDto CreateRole(RoleDto roleDto, int userId, int tenantId)
        {
            if (GetRole(roleDto.RoleId,tenantId) != null)
            {
                return EditRole(roleDto, userId, tenantId);
            }
                if (roleDto.TitleDictionary.Any(name => _typeTranslationService.CheckNameExist(name.Key, name.Value, roleDto.RoleId, tenantId)))
                {
                    throw new ValidationException(ErrorCodes.NameIsExist);
                }

            var roleObj = Mapper.Map<Role>(roleDto);
            foreach (var roleName in roleDto.TitleDictionary)
            {
                roleObj.RoleTranslations.Add(new RoleTranslation
                {
                    Title = roleName.Value,
                    Language = roleName.Key, 
                });
            }
            foreach (var roleper in roleDto.Permissions)
            {

                roleObj.RolePermissions.Add(new RolePermission
                { 
                    PermissionId = roleper.PermissionId,
                    ActionId = 1, 
                });
            }

            roleObj.CreationTime = Strings.CurrentDateTime;
            roleObj.CreatorUserId = userId; 
            _rolePermissionService.InsertRange(roleObj.RolePermissions);
            _typeTranslationService.InsertRange(roleObj.RoleTranslations);
            _roleService.Insert(roleObj);

            SaveChanges();
            return roleDto;
        }

        public RoleDto EditRole(RoleDto roleDto, int userId, int tenantId)
        {
            //var roleObj = _roleService.Find(roleDto.RoleId);
            if (roleDto.TitleDictionary.Any(name => _typeTranslationService.CheckNameExist(name.Key,name.Value, roleDto.RoleId, tenantId)))
            {
                throw new ValidationException(ErrorCodes.NameIsExist);
            }
            var roleObj = _roleService.Query(x => x.RoleId == roleDto.RoleId  )
                .Select().FirstOrDefault();

            if (roleObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);

            foreach (var roleName in roleDto.TitleDictionary)
            {
                var roleTranslation = roleObj.RoleTranslations.FirstOrDefault(x => x.Language.ToLower() == roleName.Key.ToLower() && x.RoleId == roleDto.RoleId);
                if (roleTranslation == null)
                {
                    roleObj.RoleTranslations.Add(new RoleTranslation
                    {
                        Title = roleName.Value,
                        Language = roleName.Key
                    });
                }
                else
                    roleTranslation.Title = roleName.Value;
            }
            var deletePermissions = new RolePermission[roleObj.RolePermissions.Count];
            roleObj.RolePermissions.CopyTo(deletePermissions, 0);

            foreach (var roleObjRolePermission in deletePermissions)
            { 
                _rolePermissionService.Delete(roleObjRolePermission);

            }
            foreach (var roleper in roleDto.Permissions)
            { 
                roleObj.RolePermissions.Add(new RolePermission
                { 
                    PermissionId = roleper.PermissionId,
                    ActionId = 1, 
                });
            }
            roleObj.LastModificationTime = Strings.CurrentDateTime;
            roleObj.LastModifierUserId = userId;
            roleObj.IsDeleted = roleDto.IsDeleted; 
            _roleService.Update(roleObj);
            SaveChanges();
            return roleDto;

        }

        public PagedResultsDto GetAllRoles(int page, int pageSize, int tenantId)
        {
            return _roleService.GetAllRoles(page, pageSize, tenantId);
        }

    }
}
