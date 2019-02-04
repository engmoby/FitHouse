using System;
using System.Collections.Generic;
using FitHouse.Common;

namespace FitHouse.API.Models
{
    public class OrderModel
    {

        public long OrderId { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime? OrderExpiration { get; set; }
        public DateTime? OrderStartDate { get; set; }

        public bool IsByAdmin { get; set; }
        public bool IsPaused { get; set; }
        public bool IsPaid { get; set; }
        public bool IsDelivery { get; set; }
        public bool IsProgram { get; set; }
        public DateTime PauseStart { get; set; }
        public string OrderCode { get; set; }
        public virtual Enums.OrderType Type { get; set; }
        public List<OrderDetailsModel> OrderDetails { get; set; }

        public long UserId { get; set; }
        public UserModel User { get; set; }

        public long AddressId { get; set; }
        public AddressModel Address { get; set; }
        public decimal Price { get; set; }

        public long BranchId { get; set; }
        public BranchModel Branch { get; set; }
    }
}
