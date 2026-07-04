using EcoCommunity.Data.Enums;
using EcoCommunity.Data.Modules.Users.Entities;

namespace EcoCommunity.Data.Entities;

public class Issue
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string Location { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime ResolvedAt { get; set; }
    public IssuePriority Priority { get; set; }
    public IssueStatus Status { get; set; }
    public int ReporterId { get; set; }
    public User Reporter { get; set; }
}