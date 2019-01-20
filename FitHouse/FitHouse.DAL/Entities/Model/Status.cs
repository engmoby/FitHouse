using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class Status : Entity
    {
        public Status()
        {
            StatusTranslations = new List<StatusTranslation>();
        }
        public long StatusId { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        public virtual ICollection<StatusTranslation> StatusTranslations { get; set; }
    }
}
