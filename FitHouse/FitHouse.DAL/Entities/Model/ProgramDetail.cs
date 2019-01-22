using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class ProgramDetail : Entity
    {
        public ProgramDetail()
        {
        }
        public long ProgramDetailId { get; set; }
        [ForeignKey("Program")]
        public long ProgramId { get; set; }
        [ForeignKey("Item")]
        public long ItemId { get; set; }
        public virtual Program Program { get; set; }
        public virtual Item Item { get; set; }
        public long DayNumber { get; set; }
        public long MealNumberPerDay { get; set; }
        public DateTime DayDateTime { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
    }
}
