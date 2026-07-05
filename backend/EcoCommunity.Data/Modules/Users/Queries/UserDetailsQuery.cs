using EcoCommunity.Data.Modules.Users.Dto;
using EcoCommunity.Data.Modules.Users.Repositories;
using MediatR;

namespace EcoCommunity.Data.Modules.Users.Queries;

public record UserDetailsQuery(int Id) : IRequest<UserDetailsDto?>;

internal class UserDetailsQueryHandler(IUsersRepository usersRepository) 
    : IRequestHandler<UserDetailsQuery, UserDetailsDto?>
{
    public async Task<UserDetailsDto?> Handle(UserDetailsQuery request, CancellationToken cancellationToken)
    {
        var user = await usersRepository.GetByIdAsync(request.Id, cancellationToken);

        if (user == null) return null;

        return new UserDetailsDto(
            Id: user.Id,
            Username: user.Username,
            FirstName: user.FirstName,
            LastName: user.LastName,
            Email: user.Email,
            PhoneNumber: user.PhoneNumber,
            CreatedAt: user.CreatedAt
        );
    }
}