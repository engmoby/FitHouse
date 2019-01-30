using System;
using System.ComponentModel.DataAnnotations.Schema;
using FitHouse.Common;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class OrderDetail : Entity
    {
        public OrderDetail()
        {
        }
        public long OrderDetailId { get; set; }
        [ForeignKey("Order")]
        public long OrderId { get; set; }
        public virtual Order Order { get; set; }


        [ForeignKey("Item")]
        public long? ItemId { get; set; }
        public virtual Item Item { get; set; }


        [ForeignKey("Meal")]
        public long? MealId { get; set; }
        public virtual Meal Meal { get; set; }

        [ForeignKey("Program")]
        public long? ProgramId { get; set; }
        public virtual Program Program { get; set; }

        public long DayNumber { get; set; } 
        public DateTime Day { get; set; }

        public virtual Enums.OrderStatus Status { get; set; }
        public string NotDeliverdNote { get; set; }

    }
}
