using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class StatusTranslation : Entity
    {
        public long StatusTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        [ForeignKey("Status")]
        public long StatusId { get; set; }
        public virtual Status Status { get; set; }
    }
}
