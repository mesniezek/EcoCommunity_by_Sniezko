using EcoCommunity.Data.Modules.Users.Dto;
using EcoCommunity.Data.Modules.Users.Entities;
using EcoCommunity.Data.Modules.Users.Repositories;
using MediatR;

namespace EcoCommunity.Data.Modules.Users.Commands
{
    public record UserCreateCommand(UserParams Params) : IRequest<int>;

    public class UserCreateCommandHandler(IUsersRepository usersRepository) : IRequestHandler<UserCreateCommand, int>
    {
        public async Task<int> Handle(UserCreateCommand request, CancellationToken cancellationToken)
        {
            var input = request.Params;

            var user = new User(
                input.Username,
                input.FirstName,
                input.LastName,
                input.Email,
                input.PhoneNumber,
                input.Password
            );
            
            await usersRepository.AddAsync(user, cancellationToken);
            await usersRepository.SaveChangesAsync(cancellationToken);

            return user.Id;
        }
    }
}