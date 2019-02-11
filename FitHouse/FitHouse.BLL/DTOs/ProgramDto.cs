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
        public decimal Price { get; set; }
        public bool IsAdmin { get; set; }
        public bool IsForClient { get; set; }

        public bool IsOrdering { get; set; }
        public long? AddressId { get; set; }
        public long branchId { get; set; }
        public bool IsDelivery { get; set; }
        public bool IsProgram { get; set; }
        public long UserId { get; set; }

        public Dictionary<string, string> ProgramNameDictionary { get; set; }
        public Dictionary<string, string> ProgramDescriptionDictionary { get; set; }
        //public List<ProgramTranslationDto> ProgramTranslations { get; set; }
        public List<ProgramDetailDto> ProgramDetails { get; set; }
        public List<DayDto> Days { get; set; }
        public DateTime Day { get; set; }

    }
}
