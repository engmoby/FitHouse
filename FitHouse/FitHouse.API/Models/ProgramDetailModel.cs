using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FitHouse.API.Models
{
    public class ProgramDetailModel
    {
        public long ProgramDetailId { get; set; }
        public long ProgramId { get; set; }
        public long ItemId { get; set; }
        //public ProgramModel Program { get; set; }
         public ItemModel Item { get; set; }
        public long DayNumber { get; set; }
        public long MealNumberPerDay { get; set; }
        public DateTime DayDateTime { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
    }
}