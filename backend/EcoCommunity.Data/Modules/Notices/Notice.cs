using EcoCommunity.Data.Enums;
using EcoCommunity.Data.Modules.Users.Entities;

namespace EcoCommunity.Data.Entities;

public class Notice
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime ExpiresAt { get; set; }
    public int CreatedById { get; set; }
    public User CreatedBy { get; set; }
    public int AssignedToId { get; set; }
    public User AssignedTo { get; set; }
    public NoticeCategory Category { get; set; }
}