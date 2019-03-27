using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FitHouse.API.Models
{
    public class SizeModel
    {
        public long SizeId { get; set; }
        public Dictionary<string, string> SizeNameDictionary { get; set; }
    }
}