using System;

namespace FitHouse.API.Models
{
    public class AddressModel
    {

        public long AddressId { get; set; }

        public string Floor { get; set; }
        public string AppartmentNo { get; set; }
        public string Description { get; set; }

        public long UserId { get; set; }

        public long? BranchId { get; set; }
    }
}