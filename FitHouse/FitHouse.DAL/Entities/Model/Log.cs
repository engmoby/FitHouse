using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class Log : Entity
    {
        public Log()
        {
        }
        public long LogId { get; set; }
        [ForeignKey("User")]
        public long UserId { get; set; }
        public User User { get; set; }
        public string EndPointName { get; set; }
        public string Action { get; set; }
        public string Module { get; set; }
        public DateTime ActionDateTime { get; set; }
        public bool IsSuccess { get; set; }
        public string ErrorMsg { get; set; }
        public long? RecordId { get; set; }
        public string Model { get; set; }
        public string IPAddress { get; set; }
        public string BrowserType { get; set; }
        public string BrowserVersion { get; set; }

    }
}
