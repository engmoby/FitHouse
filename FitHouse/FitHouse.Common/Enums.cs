namespace FitHouse.Common
{
    public class Enums
    {
        public enum RoleType
        {
            Client,
            GlobalAdmin
        }
        public enum Days
        {
            Saturday,
            Sunday,
            Mondau,
            Tuesday,
            Wednesday,
            Thursday,
            Friday
        }
        public enum OrderStatus
        {
            Open,
            Pending,
            Prepering,
            OnTheWay,
            Deliverd,
            NotDeliverd,
            KitchenFinished
        }
        public enum OrderType
        {
            Program,
            Meal,
            Item,
            CustomProgram
        }

        public enum ItemType
        {
            Normal,
            BreakFast,
            Snacks
        }
        public enum Modules
        {
            Role,
            User,
            Category,
            Item,
            Branch,
            Meal,
            Program
        }
        public enum Actions
        {
            GetAll,
            Create,
            Update,
            Edit,
            Delete,
            Activate,
            Deactivate
        }
    }
}
