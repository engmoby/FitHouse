using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitHouse.BLL.DTOs
{
    public class ProgramDetailDto
    {
        public long ProgramDetailId { get; set; }
        public long ProgramId { get; set; }
        public long ItemSizeId { get; set; }
        //public ProgramDto Program { get; set; }
        public ItemSizeDto ItemSize { get; set; }
        public long DayNumber { get; set; }
        public long MealNumberPerDay { get; set; }
        public DateTime DayDateTime { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
    }
}
