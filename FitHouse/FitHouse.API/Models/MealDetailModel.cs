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
        public long ItemId { get; set; }
        public virtual MealModel Meal { get; set; }
        public virtual ItemModel Item { get; set; }
        public long IsDeleted { get; set; }
        public bool IsActive { get; set; }

    }
}