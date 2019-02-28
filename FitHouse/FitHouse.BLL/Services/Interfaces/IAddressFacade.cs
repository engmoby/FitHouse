using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitHouse.BLL.DTOs;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface IAddressFacade
    {
        List<AddressDto> GetUserAddresses(long userId);
        AddressDto CreateAddress(AddressDto addressDto, int userId);
        AddressDto EditAddress(AddressDto addressDto, int userId);

    }
}
