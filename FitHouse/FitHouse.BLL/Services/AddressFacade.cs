using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;
using FitHouse.DAL.Entities.Model;
using Repository.Pattern.UnitOfWork;

namespace FitHouse.BLL.Services
{
    public class AddressFacade : BaseFacade, IAddressFacade
    {
        private readonly IAddressService _addressService;

        public AddressFacade(IAddressService addressService, IUnitOfWorkAsync unitOfWork) : base(unitOfWork)
        {
            _addressService = addressService;
        }

        public List<AddressDto> GetUserAddresses(long userId)
        {
            return Mapper.Map<List<AddressDto>>(_addressService.GetUserAddresses(userId));

        }
    }
}
