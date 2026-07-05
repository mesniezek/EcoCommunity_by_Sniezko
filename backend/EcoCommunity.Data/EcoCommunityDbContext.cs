using EcoCommunity.Data.Entities;
using EcoCommunity.Data.Modules.Users.Entities;
using Microsoft.EntityFrameworkCore;

namespace EcoCommunity.Data
{
    public class EcoCommunityDbContext : DbContext
    {
        public EcoCommunityDbContext(DbContextOptions<EcoCommunityDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Duty> Duties { get; set; }
        public DbSet<Issue> Issues { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<Notice> Notices { get; set; }
        public DbSet<Reservation> Reservations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Notice>()
                .HasOne(n => n.CreatedBy)
                .WithMany()
                .HasForeignKey(n => n.CreatedById)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Notice>()
                .HasOne(n => n.AssignedTo)
                .WithMany()
                .HasForeignKey(n => n.AssignedToId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Reservation>()
                .HasOne(r => r.Borrower)
                .WithMany()
                .HasForeignKey(r => r.BorrowerId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}