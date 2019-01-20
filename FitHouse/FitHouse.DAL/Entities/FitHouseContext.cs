using System.Data.Entity;
using FitHouse.DAL.Entities.Model;
using Repository.Pattern.Ef6;

namespace FitHouse.DAL.Entities
{
    public class FitHouseContext : DataContext
    { 
        public DbSet<User> Users { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<RolePermission> RolePermissions { get; set; } 
        public DbSet<Role> Roles { get; set; }
        public DbSet<RoleTranslation> RoleTranslations { get; set; }

        public DbSet<Permission> Permissions { get; set; }
        public DbSet<PermissionTranslation> PermissionTranslations { get; set; }
 
        public DbSet<Category> Categories { get; set; }
        public DbSet<CategoryTranslation> CategoryTranslations { get; set; }

        public DbSet<Area> Areas { get; set; }
        public DbSet<AreaTranslation> AreaTranslations { get; set; }

        public DbSet<Branch> Branches { get; set; }
        public DbSet<BranchTranslation> BranchTranslations { get; set; }
     
        public DbSet<Country> Countries { get; set; }
        public DbSet<CountryTranslation> CountryTranslations { get; set; }
        public DbSet<Region> Regions { get; set; }
        public DbSet<RegionTranslation> RegionTranslations { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<CityTranslation> CityTranslations { get; set; }
        public DbSet<Day> Days  { get; set; }
        public DbSet<DayTranslation> DayTranslations { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<ItemTranslation> ItemTranslations { get; set; }
        public DbSet<Log> Logs { get; set; }
        public DbSet<Meal> Meals { get; set; }
        public DbSet<MealDetail> MealDetails { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }
        public DbSet<ProgExcludeDay> ProgExcludeDays { get; set; }
        public DbSet<Program> Programs { get; set; }
        public DbSet<ProgramDetail> ProgramDetails { get; set; }
        public DbSet<ProgramTranslation> ProgramTranslations { get; set; }
        public DbSet<Setting> Settings { get; set; }
        public DbSet<Status> Statuses { get; set; }
        public DbSet<StatusTranslation> StatusTranslations { get; set; }
     


        public FitHouseContext() : base("name=FitHouse")
        {
            Database.SetInitializer<FitHouseContext>(null);
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        { 
        }
    }
}