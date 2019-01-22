using System;
using System.Collections.Generic;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class Category : Entity
    {
        public Category()
        {
            CategoryTranslations = new List<CategoryTranslation>();  
            Items = new List<Item>();
        }

        public long CategoryId { get; set; }
        public bool IsActive { get; set; }
        public virtual ICollection<Item> Items { get; set; }
        public bool IsDeleted { get; set; } 
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; } 
         
        public virtual ICollection<CategoryTranslation> CategoryTranslations { get; set; }  
    }
}
