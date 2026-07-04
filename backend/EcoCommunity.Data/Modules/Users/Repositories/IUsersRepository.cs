using EcoCommunity.Data.Common.Repositories;
using EcoCommunity.Data.Modules.Users.Entities;

namespace EcoCommunity.Data.Modules.Users.Repositories;

public interface IUsersRepository : IBaseRepository<User>
{
    Task<bool> ExistsByEmailAsync(string email, CancellationToken cancellationToken);
}