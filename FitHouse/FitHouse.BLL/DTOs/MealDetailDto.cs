using System.Collections.Generic;
using System.IO;

namespace FitHouse.BLL.DTOs
{
    public class MealDetailDto
    {
        public long MealDetailId { get; set; }
         
        public long MealId { get; set; } 
        public long ItemId { get; set; }
     //   public virtual MealDto Meal { get; set; }
        public virtual ItemDto Item { get; set; }
        public long IsDeleted { get; set; }
        public bool IsActive { get; set; }
    }
}
