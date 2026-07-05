using Microsoft.EntityFrameworkCore;

namespace EcoCommunity.Data.Common.Repositories;

public class BaseRepository<T>(EcoCommunityDbContext context) : IBaseRepository<T> where T : class
{
    protected readonly DbSet<T> DbSet = context.Set<T>();

    public async Task<IEnumerable<T>> GetAllAsync(CancellationToken cancellationToken) =>
        await DbSet.AsNoTracking().ToListAsync(cancellationToken);

    public async Task<T?> GetByIdAsync(int id, CancellationToken cancellationToken) =>
        await DbSet.FindAsync([id], cancellationToken);

    public async Task AddAsync(T entity, CancellationToken cancellationToken) =>
        await DbSet.AddAsync(entity, cancellationToken);

    public void Update(T entity) =>
        DbSet.Update(entity);

    public void Delete(T entity) =>
        DbSet.Remove(entity);

    public async Task SaveChangesAsync(CancellationToken cancellationToken) =>
        await context.SaveChangesAsync(cancellationToken);
}