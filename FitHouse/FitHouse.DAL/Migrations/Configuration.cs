namespace FitHouse.DAL.Migrations
{
    using Entities.Model;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Entities.FitHouseContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = true;
        }

        protected override void Seed(Entities.FitHouseContext context)
        {
            //context.Users.AddOrUpdate(new User
            //{
            //    IsDeleted = false,
            //    FirstName = "Admin",
            //    LastName = "Abdo",
            //    Password = "ADX4VeuwJ0BAoXSOXntYdJQJoRd61V+N/TNePnJfu38=",
            //    Phone = "011435012598",
            //    Email = "admin@gmail.com"
            //});


            //var permisison3 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison4 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison5 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison6 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison7 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison8 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison9 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison10 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison11 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison12 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison13 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison14 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison15 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison16 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison17 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison18 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison19 = new Permission { IsDeleted = false, IsStatic = true };
           // var permisison20 = new Permission { IsDeleted = false, IsStatic = true };

            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison3);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison4);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison5);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison6);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison7);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison8);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison9);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison10);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison11);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison12);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison13);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison14);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison15);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison16);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison17);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison18);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison19);
            // context.Permissions.AddOrUpdate(h => h.PermissionId, permisison20);


            //var permissionTreanslation34 = new PermissionTranslation { Language = "en", Title = "Promotion", Permission = permisison20 };
            //var permissionTreanslation33 = new PermissionTranslation { Language = "ar", Title = "ترويج", Permission = permisison20 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation34);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation33);

            //var permissionTreanslation31 = new PermissionTranslation { Language = "en", Title = "Reports", Permission = permisison19 };
            //var permissionTreanslation32 = new PermissionTranslation { Language = "ar", Title = "تقارير", Permission = permisison19 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation31);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation32);

            //var permissionTreanslation30 = new PermissionTranslation { Language = "en", Title = "Client", Permission = permisison18 };
            //var permissionTreanslation29 = new PermissionTranslation { Language = "ar", Title = "العملاء", Permission = permisison18 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation29);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation30);

            //var permissionTreanslation27 = new PermissionTranslation { Language = "en", Title = "Take Away", Permission = permisison16 };
            //var permissionTreanslation28 = new PermissionTranslation { Language = "ar", Title = "تاك اواي", Permission = permisison16 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation27);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation28);


            //var permissionTreanslation25 = new PermissionTranslation { Language = "en", Title = "Order", Permission = permisison15 };
            //var permissionTreanslation26 = new PermissionTranslation { Language = "ar", Title = "الطلب", Permission = permisison15 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation25);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation26);


            //var permissionTreanslation23 = new PermissionTranslation { Language = "en", Title = "Mael", Permission = permisison14 };
            //var permissionTreanslation24 = new PermissionTranslation { Language = "ar", Title = "وجبات", Permission = permisison14 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation23);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation24);



            //var permissionTreanslation21 =
            //    new PermissionTranslation { Language = "en", Title = "User", Permission = permisison11 };
            //var permissionTreanslation22 =
            //    new PermissionTranslation { Language = "ar", Title = "المستخدمين", Permission = permisison11 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation21);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation22);


            //var permissionTreanslation1 =
            //    new PermissionTranslation { Language = "en", Title = "Category", Permission = permisison12 };
            //var permissionTreanslation2 =
            //    new PermissionTranslation { Language = "ar", Title = "الفئه", Permission = permisison12 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation1);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation2);


            //var permissionTreanslation3 =
            //    new PermissionTranslation { Language = "en", Title = "Items", Permission = permisison13 };
            //var permissionTreanslation4 =
            //    new PermissionTranslation { Language = "ar", Title = "عنصر", Permission = permisison13 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation3);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation4);

            //var permissionTreanslation5 =
            //    new PermissionTranslation { Language = "en", Title = "Log", Permission = permisison3 };
            //var permissionTreanslation6 =
            //    new PermissionTranslation { Language = "ar", Title = "سجل", Permission = permisison3 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation5);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation6);

            //var permissionTreanslation7 =
            //    new PermissionTranslation { Language = "en", Title = "Country", Permission = permisison4 };
            //var permissionTreanslation8 =
            //    new PermissionTranslation { Language = "ar", Title = "البلد", Permission = permisison4 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation7);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation8);

            //var permissionTreanslation9 =
            //    new PermissionTranslation { Language = "en", Title = "Program", Permission = permisison5 };
            //var permissionTreanslation10 =
            //    new PermissionTranslation { Language = "ar", Title = "برنامج", Permission = permisison5 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation9);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation10);

            //var permissionTreanslation11 =
            //    new PermissionTranslation { Language = "en", Title = "Role", Permission = permisison6 };
            //var permissionTreanslation12 =
            //    new PermissionTranslation { Language = "ar", Title = "صلاحيه", Permission = permisison6 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation11);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation12);

            //var permissionTreanslation13 =
            //    new PermissionTranslation { Language = "en", Title = "Delivery", Permission = permisison7 };
            //var permissionTreanslation14 =
            //    new PermissionTranslation { Language = "ar", Title = "التوصيل", Permission = permisison7 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation13);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation14);

            //var permissionTreanslation15 =
            //    new PermissionTranslation { Language = "en", Title = "Kitchen", Permission = permisison8 };
            //var permissionTreanslation16 =
            //    new PermissionTranslation { Language = "ar", Title = "المطبخ", Permission = permisison8 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation15);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation16);

            //var permissionTreanslation17 =
            //    new PermissionTranslation { Language = "en", Title = "Call Center", Permission = permisison9 };
            //var permissionTreanslation18 =
            //    new PermissionTranslation { Language = "ar", Title = "مركز الاتصال", Permission = permisison9 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation17);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation18);

            //var permissionTreanslation19 =
            //    new PermissionTranslation { Language = "en", Title = "Settings", Permission = permisison10 };
            //var permissionTreanslation20 =
            //    new PermissionTranslation { Language = "ar", Title = "الاعدادات", Permission = permisison10 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation19);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation20);



            //var permissionTreanslation29 = new PermissionTranslation { Language = "en", Title = "PickUp", Permission = permisison17 };
            //var permissionTreanslation30 = new PermissionTranslation { Language = "ar", Title = "Pick", Permission = permisison17 };
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation29);
            //context.PermissionTranslations.AddOrUpdate(h => h.PermissionTranslationId, permissionTreanslation30);



            //Role adminRole = new Role { IsDeleted = false };
            //context.Roles.AddOrUpdate(adminRole);
            //context.RoleTranslations.AddOrUpdate(
            //    new RoleTranslation { Language = "en", Title = "admin", Role = adminRole });
            //context.RoleTranslations.AddOrUpdate(
            //    new RoleTranslation { Language = "ar", Title = "مشرف", Role = adminRole });

            //context.UserRoles.AddOrUpdate(new UserRole
            //{
            //    Role = adminRole,
            //    User = context.Users.FirstOrDefault()
            //});
            //context.RolePermissions.AddOrUpdate(
            //    new RolePermission { ActionId = 1, Role = adminRole, Permission = permisison11 });
            //context.RolePermissions.AddOrUpdate(
            //    new RolePermission { ActionId = 1, Role = adminRole, Permission = permisison12 });
            //context.RolePermissions.AddOrUpdate(
            //    new RolePermission { ActionId = 1, Role = adminRole, Permission = permisison3 });
            //context.RolePermissions.AddOrUpdate(
            //    new RolePermission { ActionId = 1, Role = adminRole, Permission = permisison4 });
            //context.RolePermissions.AddOrUpdate(
            //    new RolePermission { ActionId = 1, Role = adminRole, Permission = permisison5 });
            //context.RolePermissions.AddOrUpdate(
            //    new RolePermission { ActionId = 1, Role = adminRole, Permission = permisison6 });
            //context.RolePermissions.AddOrUpdate(
            //    new RolePermission { ActionId = 1, Role = adminRole, Permission = permisison9 });
            //context.RolePermissions.AddOrUpdate(
            //    new RolePermission { ActionId = 1, Role = adminRole, Permission = permisison10 });
            //context.RolePermissions.AddOrUpdate(
            //    new RolePermission { ActionId = 1, RoleId = 1, Permission = permisison11 });

            //var day1 = new Day { IsDeleted = false, IsActive = true };
            //context.Days.AddOrUpdate(h => h.DayId, day1);
            //context.DayTranslations.AddOrUpdate(
            //    new DayTranslation { Language = "en", Title = "Saturday", Day = day1 });
            //context.DayTranslations.AddOrUpdate(
            //    new DayTranslation { Language = "ar", Title = "السبت", Day = day1 });


            //var day2 = new Day { IsDeleted = false, IsActive = true };
            //context.Days.AddOrUpdate(h => h.DayId, day2);
            //context.DayTranslations.AddOrUpdate(
            //    new DayTranslation { Language = "en", Title = "Sunday", Day = day2 });
            //context.DayTranslations.AddOrUpdate(
            //    new DayTranslation { Language = "ar", Title = "الأحد", Day = day2 });

            //var day3 = new Day { IsDeleted = false, IsActive = true };
            //context.Days.AddOrUpdate(h => h.DayId, day3);
            //context.DayTranslations.AddOrUpdate(
            //    new DayTranslation { Language = "en", Title = "Monday", Day = day3 });
            //context.DayTranslations.AddOrUpdate(
            //    new DayTranslation { Language = "ar", Title = "الاثنين", Day = day3 });

            //var day4 = new Day { IsDeleted = false, IsActive = true };
            //context.Days.AddOrUpdate(h => h.DayId, day4);
            //context.DayTranslations.AddOrUpdate(
            //    new DayTranslation { Language = "en", Title = "Tuesday", Day = day4 });
            //context.DayTranslations.AddOrUpdate(
            //    new DayTranslation { Language = "ar", Title = "الثلاثاء", Day = day4 });

            //var day5 = new Day { IsDeleted = false, IsActive = true };
            //context.Days.AddOrUpdate(h => h.DayId, day5);
            //context.DayTranslations.AddOrUpdate(
            //    new DayTranslation { Language = "en", Title = "Wednesday", Day = day5 });
            //context.DayTranslations.AddOrUpdate(
            //    new DayTranslation { Language = "ar", Title = "الأربعاء", Day = day5 });

            //var day6 = new Day { IsDeleted = false, IsActive = true };
            //context.Days.AddOrUpdate(h => h.DayId, day6);
            //context.DayTranslations.AddOrUpdate(
            //    new DayTranslation { Language = "en", Title = "Thursday", Day = day6 });
            //context.DayTranslations.AddOrUpdate(
            //    new DayTranslation { Language = "ar", Title = "الخميس", Day = day6 });

            //var day7 = new Day { IsDeleted = false, IsActive = true };
            //context.Days.AddOrUpdate(h => h.DayId, day7);
            //context.DayTranslations.AddOrUpdate(
            //    new DayTranslation { Language = "en", Title = "Friday", Day = day7 });
            //context.DayTranslations.AddOrUpdate(
            //    new DayTranslation { Language = "ar", Title = "الجمعه", Day = day7 });
        }
    }

}
