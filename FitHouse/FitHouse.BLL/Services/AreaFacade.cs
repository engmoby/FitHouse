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
    public class AreaFacade : BaseFacade, IAreaFacade
    {
        private readonly IAreaService _areaService;
        private readonly IAreaTranslationService _typeTranslationService;
        private readonly IUserService _userService;


        public AreaFacade(IAreaService areaService, IUnitOfWorkAsync unitOfWork,
            IAreaTranslationService typeTranslationService, IUserService userService) : base(unitOfWork)
        {
            _areaService = areaService;
            _typeTranslationService = typeTranslationService;
            _userService = userService;
        }

        public AreaFacade(IAreaService areaService, IAreaTranslationService typeTranslationService,
            IUserService userService)
        {
            _areaService = areaService;
            _typeTranslationService = typeTranslationService;
            _userService = userService;
        }

        public AreaDto GetArea(long areaId)
        {
            return Mapper.Map<AreaDto>(_areaService.Query(x => x.AreaId == areaId).Select()
                .FirstOrDefault());
        }

        public AreaDto CreateArea(AreaDto areaDto, int userId)
        {
            if (GetArea(areaDto.AreaId) != null)
            {
                return EditArea(areaDto, userId);
            }
            ValidateArea(areaDto, areaDto.CityId);
            var areaObj = Mapper.Map<Area>(areaDto);
            foreach (var areaName in areaDto.TitleDictionary)
            {
                areaObj.AreaTranslations.Add(new AreaTranslation
                {
                    Title = areaName.Value,
                    Language = areaName.Key
                });
            }

            areaObj.CreationTime = Strings.CurrentDateTime;
            areaObj.CreatorUserId = userId; 
            _typeTranslationService.InsertRange(areaObj.AreaTranslations);
            _areaService.Insert(areaObj);
            SaveChanges();
            return areaDto;
        }

        public AreaDto EditArea(AreaDto areaDto, int userId)
        {
            var areaObj = _areaService.Query(x => x.AreaId == areaDto.AreaId  ).Select()
                .FirstOrDefault();
            if (areaObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);
            ValidateArea(areaDto,areaDto.CityId);
            foreach (var areaName in areaDto.TitleDictionary)
            {
                var areaTranslation = areaObj.AreaTranslations.FirstOrDefault(
                    x => x.Language.ToLower() == areaName.Key.ToLower()
                         && x.AreaId == areaDto.AreaId);
                if (areaTranslation == null)
                {
                    areaObj.AreaTranslations.Add(new AreaTranslation
                    {
                        Title = areaName.Value,
                        Language = areaName.Key
                    });
                }
                else
                    areaTranslation.Title = areaName.Value;
            }

            areaObj.LastModificationTime = Strings.CurrentDateTime;
            areaObj.LastModifierUserId = userId;
            areaObj.IsDeleted = areaDto.IsDeleted;
            //areaObj.IsStatic = areaDto.IsStatic;
            _areaService.Update(areaObj);
            SaveChanges();
            return areaDto;

        }

        public PagedResultsDto GetAllAreas(long cityId, int page, int pageSize)
        {
            return _areaService.GetAllAreas(cityId, page, pageSize);
        }

        public AreaDto GetAllAreasByUserId(long userId)
        {
            return null;
            //return Mapper.Map<AreaDto>(_userService.Find(userId).Area);
        }

        private void ValidateArea(AreaDto areaDto, long cityId)
        {
            foreach (var name in areaDto.TitleDictionary)
            {
                if (name.Value.Length > 300)
                    throw new ValidationException(ErrorCodes.MenuNameExceedLength);

                if (_typeTranslationService.CheckNameExist(name.Value, name.Key, areaDto.AreaId,cityId))
                    throw new ValidationException(ErrorCodes.NameIsExist);
            }
        }

        public PagedResultsDto GetAllAreasForUser(long userId)
        {
            return null;
            //var user = _userService.Find(userId);
            //return user.AreaId.HasValue
            //    ? _areaService.GetAllAreas(user.Area.CityId.Value, 1, 0, user.TenantId)
            //    : new PagedResultsDto();

        }
    }
}