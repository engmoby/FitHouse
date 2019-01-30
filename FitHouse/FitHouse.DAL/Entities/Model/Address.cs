using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class Address : Entity
    {
        

        [Key]
        public long AddressId { get; set; }

        public string Floor { get; set; }
        public string AppartmentNo { get; set; }
        public string Description { get; set; }

        public long UserId { get; set; } 

        public long? BranchId { get; set; }
        [ForeignKey("BranchId")]
        public virtual Branch Branch { get; set; }

    }
}
