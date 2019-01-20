namespace FitHouse.DAL.Migrations
{
    using Entities.Model;
    using System.Data.Entity.Migrations;

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

            //var permisison11 = new Permission { IsDeleted = false, IsStatic = true };

            //var permisison12 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison13 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison3 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison4 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison5 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison6 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison7 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison8 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison9 = new Permission { IsDeleted = false, IsStatic = true };
            //var permisison10 = new Permission { IsDeleted = false, IsStatic = true };
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison3);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison4);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison5);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison6);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison7);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison8);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison9);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison10);
            //context.Permissions.AddOrUpdate(h => h.PermissionId, permisison11);


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



            //Role adminRole = new Role { IsDeleted = false, IsStatic = true };
            //context.Roles.AddOrUpdate(adminRole);
            //context.RoleTranslations.AddOrUpdate(
            //    new RoleTranslation { Language = "en", Title = "admin", Role = adminRole });
            //context.RoleTranslations.AddOrUpdate(
            //    new RoleTranslation { Language = "ar", Title = "مشرف", Role = adminRole });

            ////context.UserRoles.AddOrUpdate(new UserRole
            ////{
            ////    Role = adminRole,
            ////    TenantId = 1,
            ////    User = context.Users.FirstOrDefault()
            ////});
            //context.RolePermissions.AddOrUpdate(
            //    new RolePermission { ActionId = 1, Role = adminRole, Permission = permisison1 });
            //context.RolePermissions.AddOrUpdate(
            //    new RolePermission { ActionId = 1, Role = adminRole, Permission = permisison2 });
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

        }
    }

}
