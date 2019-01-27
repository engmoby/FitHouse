using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FitHouse.API.Models
{
    public class DayTranslationModel
    {
        public long DayTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        public long DayId { get; set; }
       // public DayModel Day { get; set; }
    }
}