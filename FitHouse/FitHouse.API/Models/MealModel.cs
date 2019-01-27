using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace FitHouse.API.Models
{
    public class MealModel
    {
        public long MealId { get; set; }
        public MemoryStream Image { get; set; }
        public string ImageUrl { get; set; }
        public string MealName { get; set; }
        public string MealDescription { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; } 
        public long Mealsize { get; set; }
        public long Carbs { get; set; }
        public decimal TotalPrice { get; set; }
        public decimal Cost { get; set; }
        public decimal MealPrice { get; set; }
        public long Calories { get; set; }
        public long VAT { get; set; }
        public long Protein { get; set; }
        public Dictionary<string, string> MealNameDictionary { get; set; }
        public Dictionary<string, string> MealDescriptionDictionary { get; set; }
      
        public bool IsImageChange { get; set; } 
        public long MealDiscount { get; set; }
        public List<MealDetailModel> MealDetail { get; set; }

    }
}