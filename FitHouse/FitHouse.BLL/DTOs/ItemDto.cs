using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitHouse.BLL.DTOs
{
    public class ItemDto
    {
        public long ItemId { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        public long CategoryId { get; set; }
        public long ItemSize { get; set; }
        public long Carbs { get; set; }
        public long TotalPrice { get; set; }
        public long Cost { get; set; }
        public long Price { get; set; }
        public long Calories { get; set; }
        public long VAT { get; set; }
        public long Protein { get; set; }
        public List<ItemTranslationDto> ItemTranslations { get; set; }
        public CategoryDto Category { get; set; }
    }
}
