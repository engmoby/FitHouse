using Repository.Pattern.Ef6;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitHouse.DAL.Entities.Model
{
    public class ItemSize : Entity
    {
        public long ItemSizeId { get; set; }
        [ForeignKey("Item")]
        public long ItemId { get; set; }
        public virtual Item Item { get; set; }
        [ForeignKey("Size")]
        public long SizeId { get; set; }
        public virtual Size Size { get; set; }
        //public double Price { get; set; }
        public long Carbs { get; set; }
        public decimal TotalPrice { get; set; }
        public decimal Cost { get; set; }
        public decimal Price { get; set; }
        public long Calories { get; set; }
        public long Fat { get; set; }
        public long Protein { get; set; }
    }
}
