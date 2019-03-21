using System;
using System.Collections.Generic;

namespace FitHouse.BLL.DTOs
{
    public class UserDto
    {
        public long UserId { get; set; }
        public string UserCode { get; set; }
        public long Code { get; set; }
        public string FirstName { get; set; } 
        public string LastName { get; set; } 
        public string Email { get; set; } 
        public string Password { get; set; } 
        public string Phone  { get; set; } 

        public bool IsDeleted { get; set; }

        public bool IsAdmin { get; set; }
        public bool IsDefaultPassword { get; set; }
        public bool IsActive { get; set; }
        public bool IsStatic { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; } 
        public long? BranchId { get; set; } 
        public BranchDto Branch { get; set; }
        public List<UserRoleDto> UserRoles { get; set; }
        public List<long> PermissionId { get; set; } 
        public long? AreaId { get; set; }
        public long? CountryId { get; set; }
        public long? RegionId { get; set; }
        public long? CityId { get; set; }
        //public AddressDto Address { get; set; }
        public string Floor { get; set; }
        public string AppartmentNo { get; set; }
        public string Description { get; set; }
        public bool IsAddress { get; set; }


        public int? Weight { get; set; }
        public int? Length { get; set; }
    }
}
