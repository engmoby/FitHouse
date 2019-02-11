using System;
using System.Collections.Generic;

namespace FitHouse.API.Models
{
    public class UserModel
    {
        public long UserId { get; set; }
        public string UserCode { get; set; }
        public long Code { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; } 
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }

        public bool IsAdmin { get; set; }
        public bool IsDefaultPassword { get; set; }
        public bool IsStatic { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; } 
        public int BranchId { get; set; }
        public virtual ICollection<UserRoleModel> UserRoles { get; set; }
        public long? DepartmentId { get; set; }
        public long? AreaId { get; set; }
        public List<long> CateoriesId { get; set; }
        public List<long> BranchesId { get; set; }
        public long? CountryId { get; set; }
        public long? RegionId { get; set; }
        public long? CityId { get; set; }
        //public AddressModel Address { get; set; }
        public string Floor { get; set; }
        public string AppartmentNo { get; set; }
        public string Description { get; set; }
        public bool IsAddress { get; set; }

    }
}