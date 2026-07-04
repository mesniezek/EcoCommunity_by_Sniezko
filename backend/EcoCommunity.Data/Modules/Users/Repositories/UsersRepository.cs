using EcoCommunity.Data.Common.Repositories;
using EcoCommunity.Data.Modules.Users.Entities;
using Microsoft.EntityFrameworkCore;

namespace EcoCommunity.Data.Modules.Users.Repositories;

public class UsersRepository(EcoCommunityDbContext context) : BaseRepository<User>(context), IUsersRepository
{
    public async Task<bool> ExistsByEmailAsync(string email, CancellationToken cancellationToken)
    {
        return await DbSet.AnyAsync(u => u.Email == email, cancellationToken);
    }
}