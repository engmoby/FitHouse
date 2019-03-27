using Repository.Pattern.Ef6;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitHouse.DAL.Entities.Model
{
    public class SizeTranslation : Entity
    {
        public long SizeTranslationId { get; set; }
        public string Language { get; set; }
        public string SizeName { get; set; }
        public long SizeId { get; set; }
        public virtual Size Size { get; set; }
    }
}
