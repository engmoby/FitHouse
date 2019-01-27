using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.Services.Interfaces;
using Repository.Pattern.UnitOfWork;

namespace FitHouse.BLL.Services
{
    public class MealDetailsFacade : BaseFacade, IMealDetailsFacade
    {
        private readonly IMealDetailsService _mealDetailsService; 

        public MealDetailsFacade(IMealDetailsService mealDetailsService, IUnitOfWorkAsync unitOfWork) : base(unitOfWork)
        {
            _mealDetailsService = mealDetailsService; 
        }
    }
}
