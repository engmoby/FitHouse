using System;
using AutoMapper.Configuration;
using FitHouse.API.Models;
using FitHouse.BLL;
using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;

namespace FitHouse.API
{
    public class AutoMapperConfig
    {
        public static void RegisterMappings()
        {

            var mapperConfiguration = new MapperConfigurationExpression();

            mapperConfiguration.CreateMap<UserModel, UserDto>();
            mapperConfiguration.CreateMap<UserDto, UserModel>();

            mapperConfiguration.CreateMap<UserRoleModel, UserRoleDto>();
            mapperConfiguration.CreateMap<UserRoleDto, UserRoleModel>(); 

            mapperConfiguration.CreateMap<RoleModel, RoleDto>();
            mapperConfiguration.CreateMap<RoleDto, RoleModel>();

            mapperConfiguration.CreateMap<AreaModel, AreaDto>();
            mapperConfiguration.CreateMap<AreaDto, AreaModel>();

            mapperConfiguration.CreateMap<BranchModel, BranchDto>();
            mapperConfiguration.CreateMap<BranchDto, BranchModel>();  

            mapperConfiguration.CreateMap<CategoryModel, CategoryDto>();
            mapperConfiguration.CreateMap<CategoryDto, CategoryModel>();

            mapperConfiguration.CreateMap<ItemModel, ItemDto>();
            mapperConfiguration.CreateMap<ItemDto, ItemModel>();

            mapperConfiguration.CreateMap<PermissionModel, PermissionDto>();
            mapperConfiguration.CreateMap<PermissionDto, PermissionModel>();


            mapperConfiguration.CreateMap<PermissionModel, RolePermissionDto>();
            mapperConfiguration.CreateMap<RolePermissionDto, PermissionModel>();
              
            mapperConfiguration.CreateMap<AdminModel, AdminDto>(); 

            mapperConfiguration.CreateMap<SettingModel, SettingDto>(); 
            mapperConfiguration.CreateMap<SettingDto, SettingModel>();


            mapperConfiguration.CreateMap<CountryModel, CountryDto>();
            mapperConfiguration.CreateMap<CountryDto, CountryModel>();
            mapperConfiguration.CreateMap<RegionModel, RegionDto>();
            mapperConfiguration.CreateMap<RegionDto, RegionModel>();
            mapperConfiguration.CreateMap<CityModel, CityDto>();
            mapperConfiguration.CreateMap<CityDto, CityModel>();

            mapperConfiguration.CreateMap<ProgramDto, ProgramModel>().ReverseMap();
            mapperConfiguration.CreateMap<ProgramTranslationDto, ProgramTranslationModel>().ReverseMap();
            mapperConfiguration.CreateMap<ProgramDetailDto, ProgramDetailModel>().ReverseMap();
            mapperConfiguration.CreateMap<CategoryProgramDto, CategoryProgramModel>().ReverseMap();
            mapperConfiguration.CreateMap<ItemProgramDto, ItemProgramModel>().ReverseMap();
            mapperConfiguration.CreateMap<DayDto, DayModel>().ReverseMap();


            //mapperConfiguration.CreateMap<MealDto, MealModel>().ReverseMap(); 
            //mapperConfiguration.CreateMap<MealDetailDto, MealModel>().ReverseMap();

            FitHouseBllConfig.RegisterMappings(mapperConfiguration);

        }
    }
}