using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class Day : Entity
    {
        public Day()
        {
            DayTranslations = new List<DayTranslation>();
        }
        public long DayId { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        public virtual ICollection<DayTranslation> DayTranslations { get; set; }
    }
}
