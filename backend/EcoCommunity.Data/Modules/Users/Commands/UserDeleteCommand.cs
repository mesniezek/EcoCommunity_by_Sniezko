using EcoCommunity.Data.Modules.Users.Repositories;
using MediatR;

namespace EcoCommunity.Data.Modules.Users.Commands;

public record UserDeleteCommand(int Id) : IRequest<Unit>;

public class UserDeleteCommandHandler(IUsersRepository usersRepository) : IRequestHandler<UserDeleteCommand, Unit>
{
    public async Task<Unit> Handle(UserDeleteCommand request, CancellationToken cancellationToken)
    {
        var user = await usersRepository.GetByIdAsync(request.Id, cancellationToken);
        if (user == null)
        {
            throw new KeyNotFoundException($"User with Id {request.Id} not found.");
        }

        usersRepository.Delete(user);
        await usersRepository.SaveChangesAsync(cancellationToken);

        return Unit.Value;
    }
}