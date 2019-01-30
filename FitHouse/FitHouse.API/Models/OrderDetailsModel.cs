using System;
using System.Collections.Generic;
using FitHouse.Common;

namespace FitHouse.API.Models
{
    public class OrderDetailsModel
    {
        public long OrderDetailId { get; set; }
        public long OrderId { get; set; }
        public long? ItemId { get; set; }
        public virtual ItemModel Item { get; set; }

        public long? MealId { get; set; }
        public virtual MealModel Meal { get; set; }

        public long? ProgramId { get; set; }
        public virtual ProgramModel Program { get; set; }

        public long DayNumber { get; set; }
        public DateTime Day { get; set; }

        public virtual Enums.OrderStatus Status { get; set; }
        public string NotDeliverdNote { get; set; }
    }
}
