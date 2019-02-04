using System;
using System.Collections.Generic;
using FitHouse.Common;

namespace FitHouse.BLL.DTOs
{
    public class OrderDetailCallCenterDto
    {
        public long OrderDetailId { get; set; } 
        public long OrderId { get; set; } 
        public long? ItemId { get; set; }
        public ItemProgramDto Item { get; set; }
         
        public long? MealId { get; set; }
        public MealDto Meal { get; set; }
         
        public long? ProgramId { get; set; }
        public ProgramDto Program { get; set; }

        public long DayNumber { get; set; }
        public DateTime Day { get; set; }

        public Enums.OrderStatus Status { get; set; }
        public string NotDeliverdNote { get; set; }

    }
}

