namespace FitHouse.Common
{
    public class Enums
    {
        public enum RoleType
        {
            Client,
            GlobalAdmin
        }

        public enum OrderStatus
        {
            Open,
            Pending,
            Prepering,
            OnTheWay,
            Deliverd,
            NotDeliverd
        }
        public enum OrderType
        {
            Program,
            Meal,
            Item, 
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
