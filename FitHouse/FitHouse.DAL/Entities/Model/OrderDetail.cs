using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class OrderDetail : Entity
    {
        public OrderDetail()
        {
        }
        public long OrderDetailsId { get; set; }
        [ForeignKey("Order")]
        public long OrderId { get; set; }
        [ForeignKey("Item")]
        public long ItemId { get; set; }
        [ForeignKey("Meal")]
        public long MealId { get; set; }
        [ForeignKey("Program")]
        public long ProgramId { get; set; }
        public long DayNumber { get; set; }
        public long MealNoPerDay { get; set; }
        public DateTime DayDateTime { get; set; }
        public virtual Program Program { get; set; }
        public virtual Order Order { get; set; }
        public virtual Meal Meal { get; set; }
        public virtual Item Item { get; set; }
        public long IsDeleted { get; set; }
        public bool IsActive { get; set; }
    }
}
