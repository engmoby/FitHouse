using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FitHouse.API.Models
{
    public class DayModel
    {
        public long DayId { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        public Dictionary<string, string> DayNameDictionary { get; set; }
        //public List<DayTranslationModel> DayTranslations { get; set; }
    }
}