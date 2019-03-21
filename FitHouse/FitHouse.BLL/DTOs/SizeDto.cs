using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitHouse.BLL.DTOs
{
    public class SizeDto
    {
        public long SizeId { get; set; }
        public Dictionary<string, string> SizeNameDictionary { get; set; }
    }
}
