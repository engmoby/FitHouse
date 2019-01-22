using System;
using System.Collections.Generic;

namespace FitHouse.API.Models
{
    public class CategoryModel
    {
        public long CategoryId { get; set; }
        public Dictionary<string, string> TitleDictionary { get; set; }
        public bool IsActive { get; set; }
        
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }
        public List<ItemModel> Items { get; set; }

    }
}
