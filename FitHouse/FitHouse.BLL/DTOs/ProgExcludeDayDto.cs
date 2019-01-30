using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitHouse.DAL.Entities.Model;

namespace FitHouse.BLL.DTOs
{
    public class ProgExcludeDayDto
    {
        public long ProgExcludeDayId { get; set; }
        public long DayId { get; set; }
        public long ProgramId { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
    }
}
