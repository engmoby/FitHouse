using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitHouse.BLL.DTOs
{
    public class CategoryProgramDto
    {
        public long CategoryId { get; set; }
        public Dictionary<string, string> TitleDictionary { get; set; }
        //public List<ItemProgramDto> Items { get; set; }

        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }
    }
}
