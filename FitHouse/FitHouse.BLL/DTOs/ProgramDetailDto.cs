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
        public long ItemId { get; set; }
        public ProgramDto Program { get; set; }
        public ItemDto Item { get; set; }
        public long DayNumber { get; set; }
        public long MealNumberPerDay { get; set; }
        public DateTime DayDateTime { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
    }
}
