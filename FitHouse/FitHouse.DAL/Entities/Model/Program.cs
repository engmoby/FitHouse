using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class Program : Entity
    {
        public Program()
        {
            ProgramTranslations = new List<ProgramTranslation>();
            ProgramDetails = new List<ProgramDetail>();
        }
        public long ProgramId { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        public long ProgramDays { get; set; }
        public long NoOfMeals { get; set; }
        public bool IsBreakfast { get; set; }
        public bool IsSnack { get; set; }
        public long ProgramDiscount { get; set; }
        public bool IsAdmin { get; set; }
        public bool IsForClient { get; set; }
        public virtual ICollection<ProgramTranslation> ProgramTranslations { get; set; }
        public virtual ICollection<ProgramDetail> ProgramDetails { get; set; }
    }
}
