using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class Item : Entity
    {
        public Item()
        {
            ItemTranslations = new List<ItemTranslation>();
        }
        public long ItemId { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        [ForeignKey("Category")]
        public long CategoryId { get; set; }
        public long ItemSize { get; set; }
        public long Carbs { get; set; }
        public long TotalPrice { get; set; }
        public long Cost { get; set; }
        public long Price { get; set; }
        public long Calories { get; set; }
        public long VAT { get; set; }
        public long Protein { get; set; }
        public virtual ICollection<ItemTranslation> ItemTranslations { get; set; }
        public virtual Category Category { get; set; }

    }
}