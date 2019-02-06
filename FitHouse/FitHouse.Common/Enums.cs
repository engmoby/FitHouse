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
            Item
        }
        public enum TicketStatus
        {
            Pending,
            Assigned,
            InProgress,
            Closed,
            Rejected,
            Reassigned,
            Completed
        } 
    }
}
