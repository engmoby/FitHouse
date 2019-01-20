using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class DayTranslation : Entity
    {
        public long DayTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        public long DayId { get; set; }
        public virtual Day Day { get; set; }
    }
}
