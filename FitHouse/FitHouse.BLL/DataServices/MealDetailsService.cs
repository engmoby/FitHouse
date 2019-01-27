using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace FitHouse.BLL.DataServices
{
    public class MealDetailsService : Service<MealDetail>, IMealDetailsService
    {
        public MealDetailsService(IRepositoryAsync<MealDetail> repository) : base(repository)
        {
            _repository = repository;
        }
 }
}