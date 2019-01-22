using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class ProgramTranslation : Entity
    {
        public ProgramTranslation()
        {
        }
        public long ProgramTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        [ForeignKey("Program")]
        public long ProgramId { get; set; }
        public virtual Program Program { get; set; }
    }
}
