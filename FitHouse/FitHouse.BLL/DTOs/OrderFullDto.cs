using System;
using System.Collections.Generic;
using FitHouse.Common;

namespace FitHouse.BLL.DTOs
{
    public class OrderFullDto
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
        public List<OrderDetailDto> OrderDetails { get; set; }

        public long UserId { get; set; }
        public UserDto User { get; set; }

        public long AddressId { get; set; }
        public AddressDto Address { get; set; }

        public long BranchId { get; set; }
        public BranchDto Branch { get; set; }
    }
}

