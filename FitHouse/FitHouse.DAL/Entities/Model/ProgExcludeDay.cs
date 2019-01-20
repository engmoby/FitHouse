using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class ProgExcludeDay : Entity
    {
        public ProgExcludeDay()
        {
        }

        public long ProgExcludeDayId { get; set; }
        [ForeignKey("Day")]
        public long DayId { get; set; }
        public virtual Day Day { get; set; }
        [ForeignKey("Program")]
        public long ProgramId { get; set; }
        public virtual Program Program { get; set; }
        public long IsDeleted { get; set; }
        public bool IsActive { get; set; }
    }
}
