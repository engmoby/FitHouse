﻿using System.Collections.Generic;

namespace FitHouse.API.Models
{
    public class ItemModel
    {
        public long ItemId { get; set; } 
        public string ImageUrl { get; set; }
        public string ItemName { get; set; }
        public string ItemDescription { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        public long CategoryId { get; set; }
        public long ItemSize { get; set; }
        public long Carbs { get; set; }
        public long TotalPrice { get; set; }
        public long Cost { get; set; }
        public long Price { get; set; }
        public long Calories { get; set; }
        public long VAT { get; set; }
        public long Protein { get; set; }
        public Dictionary<string, string> ItemNameDictionary { get; set; }
        public Dictionary<string, string> ItemDescriptionDictionary { get; set; }
        public virtual CategoryModel Category { get; set; }
        public bool IsImageChange { get; set; }
    }
}