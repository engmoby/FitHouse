using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitHouse.BLL.DTOs
{
    public class ItemTranslationDto
    {
        public long ItemTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        public long ItemId { get; set; }
        public ItemDto Item { get; set; }
    }
}
