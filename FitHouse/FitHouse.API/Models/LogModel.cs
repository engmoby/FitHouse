using System;

namespace FitHouse.API.Models
{
    public class LogModel
    {
        public long LogId { get; set; }
        public long UserId { get; set; }
        public UserModel User { get; set; }
        public string EndPointName { get; set; }
        public string Action { get; set; }
        public string Module { get; set; }
        public DateTime ActionDateTime { get; set; }
        public bool IsSuccess { get; set; }
        public string ErrorMsg { get; set; }
        public long RecordId { get; set; }
        public string Model { get; set; }
        public string IPAddress { get; set; }
        public string BrowserType { get; set; }
        public string BrowserVersion { get; set; }
    }
}