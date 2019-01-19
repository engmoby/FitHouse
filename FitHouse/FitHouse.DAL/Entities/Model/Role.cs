using System;
using System.Collections.Generic;
using FitHouse.DAL.Entities.Model;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class Role : Entity
    {
        public Role()
        {
            UserRoles = new List<UserRole>();
            RolePermissions = new List<RolePermission>(); 
            RoleTranslations = new List<RoleTranslation>();
        }
        public long RoleId { get; set; }  
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }
        public virtual ICollection<RoleTranslation> RoleTranslations { get; set; } 
        public virtual ICollection<UserRole> UserRoles { get; set; }
        public virtual ICollection<RolePermission> RolePermissions { get; set; } 
    }
}
