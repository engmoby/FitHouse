using System.ComponentModel.DataAnnotations.Schema;
using FitHouse.DAL.Entities.Model;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities.Model
{
    public class CategoryRole : Entity
    {
        public long CategoryRoleId { get; set; }

        [ForeignKey("Category")]
        public long CategoryId { get; set; }
        public virtual Category Category { get; set; }

        [ForeignKey("Role")]
        public long RoleId { get; set; }
        public virtual Role Role { get; set; }
    }
}
