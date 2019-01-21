using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitHouse.BLL.DTOs
{
    public class ProgramTranslationDto
    {
        public long ProgramTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        public long ProgramId { get; set; }
        public ProgramDto Program { get; set; }
    }
}
