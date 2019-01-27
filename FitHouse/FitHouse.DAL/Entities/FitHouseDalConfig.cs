using FitHouse.DAL.Entities.Model;
using Microsoft.Practices.Unity;
using Repository.Pattern.DataContext;
using Repository.Pattern.Ef6;
using Repository.Pattern.Ef6.Factories;
using Repository.Pattern.Repositories;
using Repository.Pattern.UnitOfWork;

namespace FitHouse.DAL.Entities
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
                    new InjectionConstructor(new object[] {new RepositoryFactories()})
                )
              
                .RegisterType<IRepositoryAsync<User>, Repository<User>>(new PerResolveLifetimeManager())
                ;


        }

    }
}
