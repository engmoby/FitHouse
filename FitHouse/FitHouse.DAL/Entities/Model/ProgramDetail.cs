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
        public virtual Program Program { get; set; }
        [ForeignKey("ItemSize")]
        public long ItemSizeId { get; set; }
        public virtual ItemSize ItemSize { get; set; }
        public long DayNumber { get; set; }
        public long MealNumberPerDay { get; set; }
        public DateTime DayDateTime { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
    }
}
