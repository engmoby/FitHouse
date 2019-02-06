
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class Setting : Entity
    {
        public Setting()
        {
        }
        public long SettingId { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        public bool IsSMS { get; set; }
        public bool IsMail { get; set; }
        public bool IsPause { get; set; }
        public bool AllowHistory { get; set; }
        public string CurrencyCode { get; set; }
        //[ForeignKey("Currency")]
        //public long CurrencyId { get; set; }
        //public virtual Currency Currency { get; set; }
        public long MaxPauseDays { get; set; }
        public long MinNoDaysPerProgram { get; set; }

    }
}
