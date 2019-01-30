using System;
using System.Collections.Generic;
using FitHouse.Common;

namespace FitHouse.BLL.DTOs
{
    public class OrderDetailDto
    {
        public long OrderDetailId { get; set; } 
        public long OrderId { get; set; } 
        public long? ItemId { get; set; }
        public virtual ItemDto Item { get; set; }
         
        public long? MealId { get; set; }
        public virtual MealDto Meal { get; set; }
         
        public long? ProgramId { get; set; }
        public virtual ProgramDto Program { get; set; }

        public long DayNumber { get; set; }
        public DateTime Day { get; set; }

        public virtual Enums.OrderStatus Status { get; set; }
        public string NotDeliverdNote { get; set; }

    }
}

