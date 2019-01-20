using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;
using FitHouse.Common;
using FitHouse.Common.CustomException;
using FitHouse.DAL.Entities.Model;
using Repository.Pattern.UnitOfWork;

namespace FitHouse.BLL.Services
{
    public class RegionFacade:BaseFacade,IRegionFacade
    {
        private IRegionTranslationService _regionTranslationService;
        private IRegionService _regionService;
        private IUserService _userService;
        public RegionFacade(IUnitOfWorkAsync unitOfWork, IRegionTranslationService regionTranslationService, IRegionService regionService, IUserService userService) : base(unitOfWork)
        {
            _regionTranslationService = regionTranslationService;
            _regionService = regionService;
            _userService = userService;
        }
        public RegionDto GetRegion(long regionId)
        {
            return Mapper.Map<RegionDto>(_regionService.Query(x => x.RegionId == regionId).Select().FirstOrDefault());
        }
        private void ValidateRegion(RegionDto regionDto,long countryId)
        {
            foreach (var name in regionDto.TitleDictionary)
            {
                if (name.Value.Length > 300)
                    throw new ValidationException(ErrorCodes.MenuNameExceedLength);

                if (_regionTranslationService.CheckNameExist(name.Value, name.Key, regionDto.RegionId,countryId))
                    throw new ValidationException(ErrorCodes.NameIsExist);
            }
        }
        public RegionDto CreateRegion(RegionDto regionDto, int userId)
        {
            if (GetRegion(regionDto.RegionId) != null)
            {
                return EditRegion(regionDto, userId);
            }
            ValidateRegion(regionDto,regionDto.CountryId);
            var region = Mapper.Map<Region>(regionDto);
            foreach (var name in regionDto.TitleDictionary)
            {
                region.RegionTranslations.Add(new RegionTranslation
                {
                    Title = name.Value,
                    Language = name.Key
                });
            }

            region.CreationTime = Strings.CurrentDateTime;
            region.CreatorUserId = userId;
            _regionTranslationService.InsertRange(region.RegionTranslations);
            _regionService.Insert(region);
            SaveChanges();
            return regionDto;
        }

        public RegionDto EditRegion(RegionDto regionDto, int userId)
        {
            var region = _regionService.Query(x => x.RegionId == regionDto.RegionId).Select().FirstOrDefault();
            if (region == null) throw new NotFoundException(ErrorCodes.ProductNotFound);
            ValidateRegion(regionDto, regionDto.CountryId);
            foreach (var name in regionDto.TitleDictionary)
            {
                var regionTranslation = region.RegionTranslations.FirstOrDefault(x => x.Language.ToLower() == name.Key.ToLower()
                                                                                         && x.RegionId == regionDto.RegionId);
                if (regionTranslation == null)
                {
                    region.RegionTranslations.Add(new RegionTranslation
                    {
                        Title = name.Value,
                        Language = name.Key
                    });
                }
                else
                    regionTranslation.Title = name.Value;
            }

            region.LastModificationTime = Strings.CurrentDateTime;
            region.LastModifierUserId = userId;
            region.IsDeleted = regionDto.IsDeleted;
            _regionService.Update(region);
            SaveChanges();
            return regionDto;

        }

        public PagedResultsDto GetAllRegions(long countryId, int page, int pageSize)
        {
            return _regionService.GetAllRegions(countryId,page, pageSize);
        }
        public PagedResultsDto GetAllRegionsForUser(long userId)
        {
            //var user = _userService.Find(userId);
            //return user.AreaId.HasValue ? _regionService.GetAllRegions(user.Area.City.Region.CountryId, 1, 0, user.TenantId) : new PagedResultsDto();
            return null;
        }
    }
}
