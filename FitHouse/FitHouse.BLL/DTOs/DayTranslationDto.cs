using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitHouse.BLL.DTOs
{
    public class DayTranslationDto
    {
        public long DayTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        public long DayId { get; set; }
     //   public DayDto Day { get; set; }
    }
}
