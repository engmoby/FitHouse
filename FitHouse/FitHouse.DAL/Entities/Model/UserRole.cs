﻿using System.ComponentModel.DataAnnotations.Schema;
using FitHouse.DAL.Entities.Model;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class UserRole : Entity
    { 
        public long UserRoleId { get; set; }

        [ForeignKey("User")]
        public long UserId { get; set; }
        public virtual User User { get; set; }

        [ForeignKey("Role")]
        public long RoleId { get; set; }
        public virtual Role Role { get; set; } 

    }
}
