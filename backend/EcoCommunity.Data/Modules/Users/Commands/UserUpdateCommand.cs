using EcoCommunity.Data.Modules.Users.Dto;
using EcoCommunity.Data.Modules.Users.Repositories;
using MediatR;

namespace EcoCommunity.Data.Modules.Users.Commands
{
    public record UserUpdateCommand(int Id, UserParams Params) : IRequest<int>;

    public class UserUpdateCommandHandler(IUsersRepository repository) : IRequestHandler<UserUpdateCommand, int>
    {
        public async Task<int> Handle(UserUpdateCommand request, CancellationToken cancellationToken)
        {
            var user = await repository.GetByIdAsync(request.Id, cancellationToken);
            if (user == null)
            {
                throw new KeyNotFoundException($"User with Id {request.Id} not found.");
            }

            user.Update(
                request.Params.Username,
                request.Params.FirstName,
                request.Params.LastName,
                request.Params.Email,
                request.Params.PhoneNumber,
                request.Params.Password
            );
            await repository.SaveChangesAsync(cancellationToken);

            return user.Id;
        }
    }
}