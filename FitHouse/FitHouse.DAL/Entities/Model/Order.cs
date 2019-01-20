using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
        public DateTime OrderDateTime { get; set; }
        public DateTime OrderExpiration { get; set; }
        public DateTime OrderStartDateTime { get; set; }
        [ForeignKey("User")]
        public long UserId { get; set; }
        public string OrderAddress { get; set; }
        public string NotDeliverdNote { get; set; }
        public bool IsByAdmin { get; set; }
        public bool IsPaused { get; set; }
        public bool IsPaid { get; set; }
        [ForeignKey("Status")]
        public long StatusId { get; set; }
        public long IsDelivery { get; set; }
        public long IsProgram { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        public long MealPrice { get; set; }
        public long MealDiscount { get; set; }
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
        public virtual User User { get; set; }
        public virtual Status Status { get; set; }
    }
}
