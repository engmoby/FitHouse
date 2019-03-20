using System;
using System.Collections.Generic;

namespace FitHouse.Common
{
    public class Strings
    {
        static readonly DateTime ThisTime = DateTime.Now;
        static readonly TimeZoneInfo Tst = TimeZoneInfo.FindSystemTimeZoneById("Arab Standard Time");
        static readonly DateTime TstTime = TimeZoneInfo.ConvertTime(ThisTime, TimeZoneInfo.Local, Tst);

        public const string JWT = "JWT";
        public const string userID = "UserID";
        public const string IsAdmin = "false";
        public const string userName = "Name";
        public const string userRole = "Role";
       // public const string TenantId = "TenantId";
        public const string PermissionId = "PermissionId";
        public const string TypeId = "TypeId";
        public static DateTime CurrentDateTime = TstTime;
        public static long Code = 001;


        public static readonly List<string> SupportedLanguages = new List<string> { "ar", "en" };
        public const string DefaultLanguage = "en";
        public const int BackgroundId = 3;

        public const long DefaultTemplateId = 1;
    }
}
