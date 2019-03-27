using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FitHouse.API.Models
{
    public class ItemSizeModel
    {
        public long ItemId { get; set; }
        public long ItemSizeId { get; set; }
        public long SizeId { get; set; }
        public Dictionary<string, string> SizeNameDictionary { get; set; }
        public Dictionary<string, string> ItemNameDictionary { get; set; }
        public long CategoryId { get; set; }
        public long Carbs { get; set; }
        public decimal TotalPrice { get; set; }
        public decimal Cost { get; set; }
        public decimal Price { get; set; }
        public long Calories { get; set; }
        public long Fat { get; set; }
        public long Protein { get; set; }
        public string ImageUrl { get; set; }
        public long VAT { get; set; }
    }
}