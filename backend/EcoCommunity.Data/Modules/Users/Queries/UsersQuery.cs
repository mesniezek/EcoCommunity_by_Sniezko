using EcoCommunity.Data.Modules.Users.Dto;
using EcoCommunity.Data.Modules.Users.Repositories;
using MediatR;

namespace EcoCommunity.Data.Modules.Users.Queries;

public record UsersQuery : IRequest<IEnumerable<UserDto>>;

internal class UsersQueryHandler(IUsersRepository usersRepository) 
    : IRequestHandler<UsersQuery, IEnumerable<UserDto>>
{
    public async Task<IEnumerable<UserDto>> Handle(UsersQuery request, CancellationToken cancellationToken)
    {
        var users = await usersRepository.GetAllAsync(cancellationToken);

        return users.Select(u => new UserDto(
            Id: u.Id,
            Username: u.Username,
            Email: u.Email,
            PhoneNumber: u.PhoneNumber
        ));
    }
}