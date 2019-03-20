using System;

namespace FitHouse.BLL.DTOs
{
    public class PromotionDto
    {
        public long PromotionId { get; set; }
        public string Title { get; set; }
        public int Value { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool IsCustomProgram { get; set; }
        public bool IsProgram { get; set; }
        public bool IsMeal { get; set; }
        public bool IsUsed { get; set; }
    }
}
