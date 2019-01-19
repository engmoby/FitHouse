using FitHouse.BLL.DataServices.Interfaces;
using Repository.Pattern.Repositories;
using Service.Pattern;
using FitHouse.DAL.Entities.Model;

namespace FitHouse.BLL.DataServices
{
    public class RefreshTokenService : Service<RefreshToken>, IRefreshTokenService
    {
        private readonly IRepositoryAsync<RefreshToken> _repository;

        public RefreshTokenService(IRepositoryAsync<RefreshToken> repository) : base(repository)
        {
            _repository = repository;
        }
    }
}
