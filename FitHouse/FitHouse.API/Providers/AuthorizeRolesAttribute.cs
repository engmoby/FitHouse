using System.Web.Http;
using FitHouse.Common;

namespace FitHouse.API.Providers
{
    public class AuthorizeRolesAttribute : AuthorizeAttribute
    {
        public AuthorizeRolesAttribute(params string[] roles) : base()
        {
            Roles = string.Join(",", roles);
        }
        public AuthorizeRolesAttribute(params Enums.RoleType[] roles) : base()
        {
            Roles = string.Join(",", roles);
        }
    }
}