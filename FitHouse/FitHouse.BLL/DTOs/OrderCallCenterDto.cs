using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitHouse.Common;

namespace FitHouse.BLL.DTOs
{
    public class OrderCallCenterDto
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
        public Enums.OrderType Type { get; set; }
        public List<OrderDetailCallCenterDto> OrderDetails { get; set; }

        public long UserId { get; set; }
        public UserDto User { get; set; }

        public long? AddressId { get; set; }
        public AddressDto Address { get; set; }

        public long BranchId { get; set; }
        public BranchDto Branch { get; set; }

        public List<ItemProgramDto> Items { get; set; }
        public List<MealDto> Meals { get; set; }
        public MealDto Meal { get; set; }
        public List<ProgramDto> Programs { get; set; }
        public ProgramDto Program { get; set; }
        public DateTime Day { get; set; }
    }
}
