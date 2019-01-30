using System;
using System.Collections.Generic;

namespace FitHouse.BLL.DTOs
{
    public class StatusDto
    {
        public long OrderId { get; set; }
        public DateTime OrderDateTime { get; set; }
        public DateTime OrderExpiration { get; set; }
        public DateTime OrderStartDateTime { get; set; } 
        public long UserId { get; set; } 
        public string NotDeliverdNote { get; set; }
        public bool IsByAdmin { get; set; }
        public bool IsPaused { get; set; }
        public bool IsPaid { get; set; } 
        public long StatusId { get; set; }
        public long IsDelivery { get; set; }
        public long IsProgram { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        public long MealPrice { get; set; }
        public long MealDiscount { get; set; }
        public virtual ICollection<OrderDetailDto> OrderDetails { get; set; }
        public virtual UserDto User { get; set; }
        //public virtual Status Status { get; set; }
    }
}

