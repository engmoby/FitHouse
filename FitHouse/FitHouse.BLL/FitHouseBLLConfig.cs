﻿using AutoMapper;
using AutoMapper.Configuration;
using Microsoft.Practices.Unity;
using FitHouse.BLL.DataServices;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.FormToMail;
using FitHouse.Common;
using FitHouse.DAL;
using FitHouse.DAL.Entities.Model;
using System.Linq;
using System.Threading;
using FitHouse.BLL.Services.ManageStorage;

namespace FitHouse.BLL
{
    public static class FitHouseBllConfig
    {
        public static void RegisterMappings(MapperConfigurationExpression mapperConfiguration)
        {
            mapperConfiguration.CreateMap<User, UserDto>()
                .ForMember(dto => dto.Password, m => m.MapFrom(src => PasswordHelper.Decrypt(src.Password)));
            mapperConfiguration.CreateMap<UserDto, User>();
            mapperConfiguration.CreateMap<UserRoleDto, UserRole>();
            mapperConfiguration.CreateMap<UserRole, UserRoleDto>();

            mapperConfiguration.CreateMap<Setting, SettingDto>();
            mapperConfiguration.CreateMap<SettingDto, Setting>();

            mapperConfiguration.CreateMap<RoleDto, Role>();
            mapperConfiguration.CreateMap<Role, RoleDto>()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.RoleTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));

            mapperConfiguration.CreateMap<RolePermissionDto, RolePermission>();
            mapperConfiguration.CreateMap<RolePermission, RolePermissionDto>()
                .ForMember(dto => dto.Permission, m => m.MapFrom(src => src.Permission))
                .ForMember(dto => dto.Role, m => m.MapFrom(src => src.Role));

            mapperConfiguration.CreateMap<ProgExcludeDayDto, ProgExcludeDay>();
            mapperConfiguration.CreateMap<ProgExcludeDay, ProgExcludeDayDto>();


            mapperConfiguration.CreateMap<PermissionDto, Permission>();
            mapperConfiguration.CreateMap<Permission, PermissionDto>()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.PermissionTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));


            mapperConfiguration.CreateMap<AreaDto, Area>()
                .ForMember(dto => dto.Branches, m => m.Ignore());
            mapperConfiguration.CreateMap<Area, AreaDto>()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.AreaTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));

            mapperConfiguration.CreateMap<ProgramDto, Program>();
            mapperConfiguration.CreateMap<Program, ProgramDto>()
                //.ForMember(dto => dto.ProgramDetails, m => m.Ignore())
                .ForMember(dto => dto.ProgramNameDictionary, m => m.MapFrom(src => src.ProgramTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)))
                .ForMember(dto => dto.ProgramDescriptionDictionary, m => m.MapFrom(src => src.ProgramTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Description)));

            mapperConfiguration.CreateMap<DayDto, Day>();
            mapperConfiguration.CreateMap<Day, DayDto>()
                .ForMember(dto => dto.DayNameDictionary,
                    m => m.MapFrom(src => src.DayTranslations.ToDictionary(
                        translation => translation.Language.ToLower(), translation => translation.Title)));

            //mapperConfiguration.CreateMap<ProgramDetailDto, ProgramDetail>().ReverseMap();

            mapperConfiguration.CreateMap<BranchDto, Branch>();
            mapperConfiguration.CreateMap<Branch, BranchDto>()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.BranchTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));

            mapperConfiguration.CreateMap<CategoryRoleDto, CategoryRole>();
            mapperConfiguration.CreateMap<CategoryRole, CategoryRoleDto>();

            mapperConfiguration.CreateMap<ProgramDetailDto, ProgramDetail>();
            mapperConfiguration.CreateMap<ProgramDetail, ProgramDetailDto>();

            mapperConfiguration.CreateMap<CategoryDto, Category>();
            mapperConfiguration.CreateMap<Category, CategoryDto>()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.CategoryTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));

            mapperConfiguration.CreateMap<CategoryProgramDto, Category>();
            mapperConfiguration.CreateMap<Category, CategoryProgramDto>()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.CategoryTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));
            
            mapperConfiguration.CreateMap<ItemProgramDto, Item>();
            mapperConfiguration.CreateMap<Item, ItemProgramDto>()
                .ForMember(dto => dto.ItemNameDictionary, m => m.MapFrom(src => src.ItemTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)))
                .ForMember(dto => dto.ItemDescriptionDictionary, m => m.MapFrom(src => src.ItemTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Description)));
            
            mapperConfiguration.CreateMap<ItemDto, Item>();
            mapperConfiguration.CreateMap<Item, ItemDto>()
                .ForMember(dto => dto.ItemNameDictionary, m => m.MapFrom(src => src.ItemTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)))
                .ForMember(dto => dto.ItemDescriptionDictionary, m => m.MapFrom(src => src.ItemTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Description)))
                .ForMember(dto => dto.ItemSizes, m => m.MapFrom(src => src.ItemSizes.ToList()));
            
            mapperConfiguration.CreateMap<CountryDto, Country>();
            mapperConfiguration.CreateMap<Country, CountryDto>()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.CountryTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));


            mapperConfiguration.CreateMap<RegionDto, Region>();
            mapperConfiguration.CreateMap<Region, RegionDto>()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.RegionTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)))
                .ForMember(dto => dto.CountryNameDictionary, m => m.MapFrom(src => src.Country.CountryTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));

            mapperConfiguration.CreateMap<CityDto, City>();
            mapperConfiguration.CreateMap<City, CityDto>()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.CityTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)))
                .ForMember(dto => dto.RegionNameDictionary, m => m.MapFrom(src => src.Region.RegionTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));

            mapperConfiguration.CreateMap<MealDto, Meal>();
            mapperConfiguration.CreateMap<Meal, MealDto>()
                .ForMember(dto => dto.MealNameDictionary, m => m.MapFrom(src => src.MealTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)))
                .ForMember(dto => dto.MealDescriptionDictionary, m => m.MapFrom(src => src.MealTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Description)));

            mapperConfiguration.CreateMap<MealDetailDto, MealDetail>().ReverseMap();

            mapperConfiguration.CreateMap<OrderDto, Order>();
            mapperConfiguration.CreateMap<Order, OrderDto>()
                .ForMember(x => x.OrderDetails, m => m.Ignore());

            mapperConfiguration.CreateMap<OrderFullDto, Order>();
            mapperConfiguration.CreateMap<Order, OrderFullDto>() ;

            mapperConfiguration.CreateMap<OrderDetailDto, OrderDetail>();
            mapperConfiguration.CreateMap<OrderDetail, OrderDetailDto>();

            mapperConfiguration.CreateMap<OrderCallCenterDto, Order>();
            mapperConfiguration.CreateMap<Order, OrderCallCenterDto>();

            mapperConfiguration.CreateMap<OrderDetailCallCenterDto, OrderDetail>();
            mapperConfiguration.CreateMap<OrderDetail, OrderDetailCallCenterDto>();

            mapperConfiguration.CreateMap<AddressDto, Address>();
            mapperConfiguration.CreateMap<Address, AddressDto>();

            mapperConfiguration.CreateMap<LogDto, Log>();
            mapperConfiguration.CreateMap<Log, LogDto>();

            mapperConfiguration.CreateMap<SizeDto, Size>();
            mapperConfiguration.CreateMap<Size, SizeDto>()
                .ForMember(dto => dto.SizeNameDictionary, m => m.MapFrom(src => src.SizeTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.SizeName)));

            mapperConfiguration.CreateMap<ItemSizeDto, ItemSize>();
            mapperConfiguration.CreateMap<ItemSize, ItemSizeDto>()
                .ForMember(dto => dto.SizeNameDictionary, m => m.MapFrom(src => src.Size.SizeTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.SizeName)))
                .ForMember(dto => dto.ItemNameDictionary, m => m.MapFrom(src => src.Item.ItemTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)))
                .ForMember(dto => dto.CategoryId, m => m.MapFrom(src => src.Item.CategoryId))
                .ForMember(dto => dto.ItemId, m => m.MapFrom(src => src.ItemId))
                .ForMember(dto => dto.VAT, m => m.MapFrom(src => src.Item.VAT));

            mapperConfiguration.CreateMap<PromotionDto, Promotion>();
            mapperConfiguration.CreateMap<Promotion, PromotionDto>();
            Mapper.Initialize(mapperConfiguration);
        }

        public static void RegisterTypes(IUnityContainer container)
        {
            FitHouselConfig.RegisterTypes(container);
            container
                  .RegisterType<IRoleService, RoleService>(new PerResolveLifetimeManager())
                  .RegisterType<IAddressService, AddressService>(new PerResolveLifetimeManager())
                  .RegisterType<IProgExcludeDayService, ProgExcludeDayService>(new PerResolveLifetimeManager())
                .RegisterType<IRoleTranslationService, RoleTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<IAreaService, AreaService>(new PerResolveLifetimeManager())
                .RegisterType<IAreaTranslationService, AreaTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<IBranchService, BranchService>(new PerResolveLifetimeManager())
                .RegisterType<IBranchTranslationService, BranchTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<ICategoryService, CategoryService>(new PerResolveLifetimeManager())
                .RegisterType<ICategoryTranslationService, CategoryTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<IItemService, ItemService>(new PerResolveLifetimeManager())
                .RegisterType<IItemTranslationService, ItemTranslationService>(new PerResolveLifetimeManager())

                .RegisterType<IUserService, UserService>(new PerResolveLifetimeManager())
                .RegisterType<IUserRoleService, UserRoleService>(new PerResolveLifetimeManager())
                .RegisterType<IPermissionService, PermissionService>(new PerResolveLifetimeManager())
                .RegisterType<IPermissionTranslationService, PermissionTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<IRolePermissionService, RolePermissionService>(new PerResolveLifetimeManager())
                .RegisterType<IManageStorage, ManageStorage>(new PerResolveLifetimeManager())
                .RegisterType<IFormToMail, FormToMail>(new PerResolveLifetimeManager())

                .RegisterType<ICountryService, CountryService>(new PerResolveLifetimeManager())
                .RegisterType<ICountryTranslationService, CountryTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<IRegionService, RegionService>(new PerResolveLifetimeManager())
                .RegisterType<IRegionTranslationService, RegionTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<ICityService, CityService>(new PerResolveLifetimeManager())
                .RegisterType<ICityTranslationService, CityTranslationService>(new PerResolveLifetimeManager())

                .RegisterType<IProgramService, ProgramService>(new PerResolveLifetimeManager())
                .RegisterType<IProgramTranslationService, ProgramTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<IProgramDetailService, ProgramDetailService>(new PerResolveLifetimeManager())

                .RegisterType<IDayService, DayService>(new PerResolveLifetimeManager())
                .RegisterType<IOrderDetailsService, OrderDetailsService>(new PerResolveLifetimeManager())
                .RegisterType<IOrderService, OrderService>(new PerResolveLifetimeManager())


                .RegisterType<IMealservice, Mealservice>(new PerResolveLifetimeManager())
                .RegisterType<IMealTranslationService, MealTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<IMealDetailsService, MealDetailsService>(new PerResolveLifetimeManager())

                .RegisterType<ISettingService, SettingService>(new PerResolveLifetimeManager())

                .RegisterType<ILogService, LogService>(new PerResolveLifetimeManager())
                .RegisterType<ISizeService, SizeService>(new PerResolveLifetimeManager())
                .RegisterType<ISizeTranslationService, SizeTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<IItemSizeService, ItemSizeService>(new PerResolveLifetimeManager())
                .RegisterType<IPromotionService, PromotionService>(new PerResolveLifetimeManager())

                ;
        }

    }
}
