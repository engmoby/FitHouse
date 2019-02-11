using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace FitHouse.BLL.DataServices
{
    public class AddressService : Service<Address>, IAddressService
    {
        public AddressService(IRepositoryAsync<Address> repository) : base(repository)
        {
            _repository = repository;
        }
        public List<Address> GetUserAddresses(long userId)
        {
            var addresses = _repository.Query(x => x.UserId == userId).Select().ToList();
            return addresses;
        }
    }
}
