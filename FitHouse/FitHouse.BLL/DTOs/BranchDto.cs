using System;
using System.Collections.Generic;

namespace FitHouse.BLL.DTOs
{
    public class BranchDto
    {
        public long BranchId { get; set; }
        public Dictionary<string, string> TitleDictionary { get; set; }
        public long AreaId { get; set; }
        // public AreaDto Area { get; set; }
        public long? DeliveryCost { get; set; }
        public long? DeliveryPrice { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }
        public bool IsFees { get; set; }

    }
}

