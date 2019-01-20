using System;
using System.Collections.Generic; 
namespace FitHouse.API.Models
{
    public class AreaModel
    {
        public long AreaId { get; set; }
        public Dictionary<string, string> TitleDictionary { get; set; } 
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }
        public List<BranchModel> Branches { get; set; }
        public long CityId { get; set; }

    }
}
