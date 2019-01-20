using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class ItemTranslation : Entity
    {
        public ItemTranslation()
        {
        }
        public long ItemTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        [ForeignKey("Item")]
        public long ItemId { get; set; }
        public virtual Item Item { get; set; }
    }
}
