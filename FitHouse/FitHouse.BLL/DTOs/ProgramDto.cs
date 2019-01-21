using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitHouse.BLL.DTOs
{
    public class ProgramDto
    {
        public long ProgramId { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        public long ProgramDays { get; set; }
        public long NoOfMeals { get; set; }
        public bool IsBreakfast { get; set; }
        public bool IsSnack { get; set; }
        public long ProgramDiscount { get; set; }
        public bool IsAdmin { get; set; }
        public bool IsForClient { get; set; }
        public virtual List<ProgramTranslationDto> ProgramTranslations { get; set; }
        public virtual List<ProgramDetailDto> ProgramDetails { get; set; }
    }
}
