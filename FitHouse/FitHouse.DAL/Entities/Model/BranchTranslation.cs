﻿using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class BranchTranslation : Entity
    {
        public long BranchTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; } 
        public long BranchId { get; set; }
        public virtual Branch Branch { get; set; }
    }
}
