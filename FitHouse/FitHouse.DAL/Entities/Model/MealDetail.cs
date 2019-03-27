using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class MealDetail : Entity
    {
        public MealDetail()
        {
        }
        public long MealDetailId { get; set; }

        [ForeignKey("Meal")]
        public long MealId { get; set; }
        [ForeignKey("ItemSize")]
        public long ItemSizeId { get; set; }
        public virtual Meal Meal { get; set; }
        public virtual ItemSize ItemSize { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
    }
}
