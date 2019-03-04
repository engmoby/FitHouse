namespace FitHouse.BLL.DTOs
{
    public class AddressDto
    {
        public long AddressId { get; set; }

        public string Floor { get; set; }
        public string AppartmentNo { get; set; }
        public string Description { get; set; }

        public long UserId { get; set; }

        public long? BranchId { get; set; }
        public long? AreaId { get; set; }
        public long? CountryId { get; set; }
        public long? RegionId { get; set; }
        public long? CityId { get; set; }
         public virtual BranchDto Branch { get; set; }
    }
}
