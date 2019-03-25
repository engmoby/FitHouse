using System.Configuration;
using System.IO;
using System.Net.Mail;
using System.Text;
using System.Web;
using FitHouse.API.Models;

namespace FitHouse.API
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

        public static string SendMailRegister(string subject, string url, string username, string password, string toMail = null)
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

        public static string SendMailOrder(string subject, string startdate, string username, string ordercode, string invoice, string toMail = null)
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



            using (StreamReader reader = new StreamReader(HttpContext.Current.Server.MapPath("~/OrderMailTemplate.html")))
            {
                body = reader.ReadToEnd();
            }
            body = body.Replace("{startdate}", startdate);
            body = body.Replace("{ordercode}", ordercode);
            body = body.Replace("{UserName}", username);
            body = body.Replace("{invoice}", invoice);
            // Message body content
            message.Body = body;

            // Send SMTP mail
            smtpClient.Send(message);

            return body;
        }
        public static string SendMailOrderMeal(string subject, string startdate, string username, string ordercode, string invoice, OrderCallCenterModel orderModel, string toMail = null)
        {
            string body;
            var smtpClient = new SmtpClient();
            var message = new MailMessage();
            StringBuilder st = new StringBuilder();
            StringBuilder stAr = new StringBuilder();
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

            /*tite english*/
            st.Append("<ul>");
            foreach (var orderDetailsCallCenterModel in orderModel.Meal.MealDetails)
            {
                st.Append("<li>");
                st.Append("<div>");
                //st.Append("<img src=" + orderDetailsCallCenterModel.ItemSize.ImageUrl + ">");
                st.Append("<span style='font-size:18px'>");
                st.Append(orderDetailsCallCenterModel.ItemSize.ItemNameDictionary["en"] );
                //st.Append("<span>");
                //st.Append(orderDetailsCallCenterModel.ItemSize.ItemNameDictionary["en"] + ">");
                //st.Append("</span>");
                st.Append("</span>"); 
                //st.Append("<span>");
                //st.Append(orderDetailsCallCenterModel.ItemSize.ItemNameDictionary["en"] + ">");
                //st.Append("</span>");
                st.Append("</div>");
                st.Append("</li>");
            } 
            st.Append("</ul>");
            /*tite arabic*/
            stAr.Append("<ul>");
            foreach (var orderDetailsCallCenterModel in orderModel.Meal.MealDetails)
            {
                stAr.Append("<li>");
                stAr.Append("<div>");
                //stAr.Append("<img src=" + orderDetailsCallCenterModel.ItemSize.ImageUrl + ">");
                stAr.Append("<span style='font-size:18px'>");
                stAr.Append(orderDetailsCallCenterModel.ItemSize.ItemNameDictionary["ar"]);
                //stAr.Append("<span>");
                //stAr.Append(orderDetailsCallCenterModel.ItemSize.ItemNameDictionary["ar"] + ">");
                //stAr.Append("</span>");
                stAr.Append("</span>");
                //stAr.Append("<span>");
                //stAr.Append(orderDetailsCallCenterModel.ItemSize.ItemNameDictionary["ar"] + ">");
                //stAr.Append("</span>");
                stAr.Append("</div>");
                stAr.Append("</li>");
            }

            stAr.Append("</ul>");

            using (StreamReader reader = new StreamReader(HttpContext.Current.Server.MapPath("~/MealMailTemplate.html")))
            {
                body = reader.ReadToEnd();
            }
            body = body.Replace("{startdate}", startdate);
            body = body.Replace("{ordercode}", ordercode);
            body = body.Replace("{UserName}", username);
            body = body.Replace("{orderModel}", st.ToString());
            body = body.Replace("{orderModelAr}", stAr.ToString());
            body = body.Replace("{invoice}", invoice);
            // Message body content
            message.Body = body;

            // Send SMTP mail
            smtpClient.Send(message);

            return body;
        }

    }
}