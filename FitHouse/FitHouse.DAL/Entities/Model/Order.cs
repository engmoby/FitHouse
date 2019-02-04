using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitHouse.Common;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class Order : Entity
    {
        public Order()
        {
            OrderDetails = new List<OrderDetail>();
        }
        public long OrderId { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime? OrderExpiration { get; set; }
        public DateTime? OrderStartDate { get; set; }
        
        public bool IsByAdmin { get; set; }
        public bool IsPaused { get; set; }
        public bool IsPaid { get; set; } 
        public bool IsDelivery { get; set; }
        public bool IsProgram { get; set; }
        public DateTime? PauseStart { get; set; }  
        public string OrderCode { get; set; }
        public virtual Enums.OrderType Type { get; set; }
        public virtual Enums.OrderStatus OrderStatus { get; set; }

        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
        [ForeignKey("User")]
        public long UserId { get; set; }
        public virtual User User { get; set; }

        [ForeignKey("Address")]
        public long? AddressId { get; set; }
        public virtual Address Address { get; set; }

        [ForeignKey("Branch")]
        public long BranchId { get; set; }
        public virtual Branch Branch { get; set; }
    }
}
