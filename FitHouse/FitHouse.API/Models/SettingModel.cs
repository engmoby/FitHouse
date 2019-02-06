using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FitHouse.API.Models
{
    public class SettingModel
    {
        public long SettingId { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        public bool IsSMS { get; set; }
        public bool IsMail { get; set; }
        public bool IsPause { get; set; }
        public bool AllowHistory { get; set; }
        //public long CurrencyId { get; set; }
        public string CurrencyCode { get; set; }

        //public CurrencyDto Currency { get; set; }
        public long MaxPauseDays { get; set; }
        public long MinNoDaysPerProgram { get; set; }
    }
}