using EcoCommunity.Data.Modules.Users.Entities;

namespace EcoCommunity.Data.Entities;

public class Item
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int OwnerId { get; set; }
    public User Owner { get; set; }
}