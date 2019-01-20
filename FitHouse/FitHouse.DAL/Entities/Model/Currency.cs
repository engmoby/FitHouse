using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class Currency : Entity
    {
        public Currency()
        {
        }
        public long CurrencyId { get; set; }
        public string CurrencyCode { get; set; }
    }
}
