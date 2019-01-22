using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FitHouse.API.Models
{
    public class ProgramModel
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
        public Dictionary<string, string> ProgramNameDictionary { get; set; }
        public Dictionary<string, string> ProgramDescriptionDictionary { get; set; }
        public List<ProgramDetailModel> ProgramDetails { get; set; }
    }
}