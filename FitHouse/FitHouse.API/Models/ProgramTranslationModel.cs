using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FitHouse.API.Models
{
    public class ProgramTranslationModel
    {
        public long ProgramTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public long ProgramId { get; set; }
        public ProgramModel Program { get; set; }
    }
}