﻿using System.Collections.Generic;
using System.IO;

namespace FitHouse.BLL.DTOs
{
    public class ItemDto
    {
        public long ItemId { get; set; }
        public MemoryStream Image { get; set; }
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
        public CategoryDto Category { get; set; }
        public bool IsImageChange { get; set; }
    }
}
