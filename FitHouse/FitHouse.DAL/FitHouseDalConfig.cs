using FitHouse.DAL.Entities;
using FitHouse.DAL.Entities.Model;
using Microsoft.Practices.Unity;
using Repository.Pattern.DataContext;
using Repository.Pattern.Ef6;
using Repository.Pattern.Ef6.Factories;
using Repository.Pattern.Repositories;
using Repository.Pattern.UnitOfWork;

namespace FitHouse.DAL
{
    public static class FitHouselConfig
    {
        public static void RegisterTypes(IUnityContainer container)
        {
            container
                .RegisterType<IDataContextAsync, FitHouseContext>(new PerResolveLifetimeManager())
                .RegisterType<IUnitOfWorkAsync, UnitOfWork>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryProvider, RepositoryProvider>(
                    new PerResolveLifetimeManager(),
                    new InjectionConstructor(new object[] { new RepositoryFactories() })
                )
                .RegisterType<IRepositoryAsync<UserRole>, Repository<UserRole>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<RolePermission>, Repository<RolePermission>>(new PerResolveLifetimeManager())
                  .RegisterType<IRepositoryAsync<Role>, Repository<Role>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<RoleTranslation>, Repository<RoleTranslation>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<Permission>, Repository<Permission>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<PermissionTranslation>, Repository<PermissionTranslation>>(new PerResolveLifetimeManager())
                  .RegisterType<IRepositoryAsync<Category>, Repository<Category>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<CategoryRole>, Repository<CategoryRole>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<CategoryTranslation>, Repository<CategoryTranslation>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<Area>, Repository<Area>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<AreaTranslation>, Repository<AreaTranslation>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<Branch>, Repository<Branch>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<BranchTranslation>, Repository<BranchTranslation>>(new PerResolveLifetimeManager())
                   .RegisterType<IRepositoryAsync<User>, Repository<User>>(new PerResolveLifetimeManager())
                   .RegisterType<IRepositoryAsync<Country>, Repository<Country>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<CountryTranslation>, Repository<CountryTranslation>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<Region>, Repository<Region>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<RegionTranslation>, Repository<RegionTranslation>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<City>, Repository<City>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<CityTranslation>, Repository<CityTranslation>>(new PerResolveLifetimeManager())
                ;


        }

    }
}
