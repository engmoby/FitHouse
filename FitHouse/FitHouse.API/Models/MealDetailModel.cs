using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace FitHouse.API.Models
{
    public class MealDetailModel
    {
        public long MealDetailId { get; set; }

        public long MealId { get; set; }
        public long ItemSizeId { get; set; }
        public virtual MealModel Meal { get; set; }
        public virtual ItemSizeModel ItemSize { get; set; }
        public long IsDeleted { get; set; }
        public bool IsActive { get; set; }

    }
}