using System.Configuration;
using System.IO;
using System.Net.Mail;
using System.Web;

namespace FitHouse.Common
{
    public static class MailHelper
    {
        public static bool SendMail(string body, string subject, string toMail = null)
        {
            var smtpClient = new SmtpClient();
            var message = new MailMessage();
            var fromAddress = new MailAddress("noreply@FitHouse.com", "No Reply");

            // You can specify the host name or ipaddress of your server

            // Default in IIS will be localhost 
            smtpClient.Host = ConfigurationManager.AppSettings["EmailServer"];

            //Default port will be 25
            smtpClient.Port = int.Parse(ConfigurationManager.AppSettings["EmailServerPort"]);

            //smtpClient.EnableSsl = true;
            smtpClient.Credentials = new System.Net.NetworkCredential(ConfigurationManager.AppSettings["EmailAccount"], ConfigurationManager.AppSettings["EmailAccountPassword"]);
            smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;

            // From address will be given as a MailAddress Object
            message.From = fromAddress;

            // To address collection of MailAddress
            /*  if (string.IsNullOrEmpty(toMail))
              {
                  string[] receipants = new ModelDBContext().Brands.FirstOrDefault(i => i.ID == UserIdentity.CurrentUserIdentity.BrandID).ContactUsMail.Split(',');
                  foreach (var receipant in receipants)
                      message.To.Add(receipant.Trim());
              }
              else*/
            message.To.Add(toMail.Trim());

            message.Subject = subject;

            message.IsBodyHtml = true;

            // Message body content
            message.Body = body;

            // Send SMTP mail
            smtpClient.Send(message);

            return true;
        }

        public static string PopulateBody(string subject,string url, string username,   string password, string toMail = null)
        {
            string body;
            var smtpClient = new SmtpClient();
            var message = new MailMessage();
            var fromAddress = new MailAddress("noreply@FitHouse.com", "No Reply");

            // You can specify the host name or ipaddress of your server

            // Default in IIS will be localhost 
            smtpClient.Host = ConfigurationManager.AppSettings["EmailServer"];

            //Default port will be 25
            smtpClient.Port = int.Parse(ConfigurationManager.AppSettings["EmailServerPort"]);

            //smtpClient.EnableSsl = true;
            smtpClient.Credentials = new System.Net.NetworkCredential(ConfigurationManager.AppSettings["EmailAccount"], ConfigurationManager.AppSettings["EmailAccountPassword"]);
            smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;

            // From address will be given as a MailAddress Object
            message.From = fromAddress;

            // To address collection of MailAddress
            /*  if (string.IsNullOrEmpty(toMail))
              {
                  string[] receipants = new ModelDBContext().Brands.FirstOrDefault(i => i.ID == UserIdentity.CurrentUserIdentity.BrandID).ContactUsMail.Split(',');
                  foreach (var receipant in receipants)
                      message.To.Add(receipant.Trim());
              }
              else*/
            message.To.Add(toMail.Trim());

            message.Subject = subject;

            message.IsBodyHtml = true;

         

            using (StreamReader reader = new StreamReader(HttpContext.Current.Server.MapPath("~/MailTemplate.html")))
            {
                body = reader.ReadToEnd();
            }
            body = body.Replace("{Url}", url);
            body = body.Replace("{Email}", toMail);
            body = body.Replace("{UserName}", username);
            body = body.Replace("{Password}", password);
            //body = body.Replace("{ProductTitle}", productTitle);
            //body = body.Replace("{BackageCount}", backageCount);
            //body = body.Replace("{Start}", start);
            //body = body.Replace("{End}", end);
            // Message body content
            message.Body = body;

            // Send SMTP mail
            smtpClient.Send(message);

            return body;
        }

    }
}