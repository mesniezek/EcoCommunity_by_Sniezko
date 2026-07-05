using EcoCommunity.Data.Modules.Users.Entities;

namespace EcoCommunity.Data.Entities;

public class Duty
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public DateTime Date { get; set; }
    public int AssignedToId { get; set; }
    public User AssignedTo { get; set; }
}