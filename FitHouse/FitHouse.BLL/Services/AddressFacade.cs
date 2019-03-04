using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;
using FitHouse.Common;
using FitHouse.Common.CustomException;
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

        public AddressDto CreateAddress(AddressDto addressDto, int userId)
        {
            if (GetAddress(addressDto.AddressId) != null)
            {
                return EditAddress(addressDto, userId);
            }
            var address = Mapper.Map<Address>(addressDto);
            address.Floor = addressDto.Floor;
            address.AppartmentNo = addressDto.AppartmentNo;
            address.Description = addressDto.Description;
            address.UserId = addressDto.UserId;
            address.BranchId = addressDto.BranchId;
            _addressService.Insert(address);
            SaveChanges();
            return addressDto;
        }
        public AddressDto EditAddress(AddressDto addressDto, int userId)
        {
            var address = _addressService.Query(x => x.AddressId == addressDto.AddressId).Select().FirstOrDefault();
            if (address == null) throw new NotFoundException(ErrorCodes.ProductNotFound);
            address.Floor = addressDto.Floor;
            address.AppartmentNo = addressDto.AppartmentNo;
            address.Description = addressDto.Description;
            address.UserId = addressDto.UserId;
            address.BranchId = addressDto.BranchId;
            _addressService.Update(address);
            SaveChanges();
            return addressDto;

        }

        public AddressDto GetAddress(long addressId)
        {
            var addressObj = _addressService.Query(x => x.AddressId == addressId).Select().FirstOrDefault();
            var returnAddress = Mapper.Map<AddressDto>(addressObj);

            if (addressObj?.BranchId != null)
            {
                returnAddress.BranchId = addressObj.BranchId;
                returnAddress.Branch = Mapper.Map<BranchDto>(addressObj.Branch);
                returnAddress.AreaId = addressObj.Branch.AreaId;
                returnAddress.CityId = addressObj.Branch.Area.CityId;
                returnAddress.RegionId = addressObj.Branch.Area.City.RegionId;
                returnAddress.CountryId = addressObj.Branch.Area.City.Region.CountryId;

            }
            return returnAddress;
        }
    }
}
