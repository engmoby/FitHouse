using System.IO;

namespace FitHouse.BLL.Services.FormToMail
{
    public interface IFormToMail
    {
        void SendMail(string subj, string message,string mailTo);
    }
}
