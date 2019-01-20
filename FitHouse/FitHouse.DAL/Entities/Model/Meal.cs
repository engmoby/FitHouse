using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class Meal : Entity
    {
        public Meal()
        {
            MealTranslations = new List<MealTranslation>();
            MealDetails = new List<MealDetail>();
        }
        public long MealId { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        public long MealPrice { get; set; }
        public long MealDiscount { get; set; }
        public virtual ICollection<MealTranslation> MealTranslations { get; set; }
        public virtual ICollection<MealDetail> MealDetails { get; set; }
    }
}
