using FitHouse.BLL;
using FitHouse.BLL.Services;
using FitHouse.BLL.Services.Interfaces;
using Microsoft.Practices.Unity;
using System;
using System.Web.Http;
using Unity.WebApi;

namespace FitHouse.API
{
    public class UnityConfig
    {
        #region Unity Container
        private static Lazy<IUnityContainer> container = new Lazy<IUnityContainer>(() =>
        {
            var container = new UnityContainer();
            ApplyMapping(container, true);
            return container;
        });

        /// <summary>
        /// Gets the configured Unity container.
        /// </summary>
        public static IUnityContainer GetConfiguredContainer()
        {
            return container.Value;
        }
        #endregion

        /// <summary>Registers the type mappings with the Unity container.</summary>
        /// <param name="container">The unity container to configure.</param>
        /// <remarks>There is no need to register concrete types such as controllers or API controllers (unless you want to 
        /// change the defaults), as Unity allows resolving a concrete type even if it was not previously registered.</remarks>
        public static void RegisterTypes(HttpConfiguration config)
        {
            // NOTE: To load from web.config uncomment the line below. Make sure to add a Microsoft.Practices.Unity.Configuration to the using statements.
            // container.LoadConfiguration();
            var container = new UnityContainer();

            // TODO: Register your types here

            ApplyMapping(container, false);


            //GlobalConfiguration.Configuration.DependencyResolver = new Unity.WebApi.UnityDependencyResolver(container);
            GlobalConfiguration.Configuration.DependencyResolver =
                config.DependencyResolver = new UnityDependencyResolver(container);


        }

        public static void ApplyMapping(IUnityContainer container, bool applyDependencyResolver)
        {
            container 
               
                .RegisterType<IUserFacade, UserFacade>(new PerResolveLifetimeManager())
                .RegisterType<IRoleFacade, RoleFacade>(new PerResolveLifetimeManager())
                .RegisterType<IAreaFacade, AreaFacade>(new PerResolveLifetimeManager())
                .RegisterType<IBranchFacade, BranchFacade>(new PerResolveLifetimeManager())
                 .RegisterType<ICategoryFacade, CategoryFacade>(new PerResolveLifetimeManager())
                 .RegisterType<IItemFacade, ItemFacade>(new PerResolveLifetimeManager())
                .RegisterType<IPermissionFacade, PermissionFacade>(new PerResolveLifetimeManager())
                   .RegisterType<ICountryFacade, CountryFacade>(new PerResolveLifetimeManager())
                .RegisterType<IRegionFacade, RegionFacade>(new PerResolveLifetimeManager())
                .RegisterType<ICityFacade, CityFacade>(new PerResolveLifetimeManager()) 
                .RegisterType<IProgramFacade, ProgramFacade>(new PerResolveLifetimeManager()) 
                .RegisterType<IProgramDetailFacade, ProgramDetailFacade>(new PerResolveLifetimeManager()) 
                .RegisterType<IDayFacade, DayFacade>(new PerResolveLifetimeManager())
                .RegisterType<IMealFacade, MealFacade>(new PerResolveLifetimeManager())
                .RegisterType<IMealDetailsFacade, MealDetailsFacade>(new PerResolveLifetimeManager())
                .RegisterType<IOrderFacade, OrderFacade>(new PerResolveLifetimeManager())
                .RegisterType<ISettingFacade, SettingFacade>(new PerResolveLifetimeManager())
                .RegisterType<ILogFacade, LogFacade>(new PerResolveLifetimeManager())

                ;

            FitHouseBllConfig.RegisterTypes(container);
            if (applyDependencyResolver)
                GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);


        }
    }
}