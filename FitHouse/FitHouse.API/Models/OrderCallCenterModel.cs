using FitHouse.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FitHouse.API.Models
{
    public class OrderCallCenterModel
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
        public List<OrderDetailsCallCenterModel> OrderDetails { get; set; }

        public long UserId { get; set; }
        public UserModel User { get; set; }

        public long AddressId { get; set; }
        public AddressModel Address { get; set; }

        public long BranchId { get; set; }
        public BranchModel Branch { get; set; }

        public List<ItemProgramModel> Items { get; set; }
        public List<MealModel> Meals { get; set; }
        public List<ProgramModel> Programs { get; set; }
        public ProgramModel Program { get; set; }
        public DateTime Day { get; set; }
        public MealModel Meal { get; set; }

    }
}