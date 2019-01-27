using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitHouse.BLL.DTOs
{
    public class DayDto
    {
        public long DayId { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        public Dictionary<string, string> DayNameDictionary { get; set; }

        //public List<DayTranslationDto> DayTranslations { get; set; }
    }
}
