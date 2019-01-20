using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class MealTranslation : Entity
    {
        public MealTranslation()
        {
        }
        public long MealTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        [ForeignKey("Meal")]
        public long MealId { get; set; }
        public virtual Meal Meal { get; set; }
        
    }
}
