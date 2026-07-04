using EcoCommunity.Data.Enums;
using EcoCommunity.Data.Modules.Users.Entities;

namespace EcoCommunity.Data.Entities;

public class Reservation
{
    public int Id { get; set; }
    public int ItemId { get; set; }
    public Item Item { get; set; }
    public int BorrowerId { get; set; }
    public User Borrower { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public ReservationStatus Status { get; set; }
}