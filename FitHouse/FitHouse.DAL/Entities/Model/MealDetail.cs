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
        [ForeignKey("Item")]
        public long ItemId { get; set; }
        public virtual Meal Meal { get; set; }
        public virtual Item Item { get; set; }
        public long IsDeleted { get; set; }
        public bool IsActive { get; set; }
    }
}
