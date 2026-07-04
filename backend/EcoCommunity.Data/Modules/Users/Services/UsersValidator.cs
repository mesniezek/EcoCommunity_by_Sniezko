using EcoCommunity.Data.Modules.Users.Commands;
using EcoCommunity.Data.Modules.Users.Repositories;
using FluentValidation;

namespace EcoCommunity.Data.Modules.Users.Services;

public class UserCreateCommandValidator : AbstractValidator<UserCreateCommand>
{
    public UserCreateCommandValidator(IUsersRepository usersRepository)
    {
        RuleFor(x => x.Params.Email)
            .NotEmpty().WithMessage("Email nie może być pusty.")
            .EmailAddress().WithMessage("Podany format adresu email jest niepoprawny.");

        RuleFor(x => x.Params.Username)
            .NotEmpty().WithMessage("Nazwa użytkownika jest wymagana.")
            .MinimumLength(3).WithMessage("Nazwa użytkownika musi mieć min. 3 znaki.");

        RuleFor(x => x.Params.Email)
            .MustAsync(async (email, cancellationToken) =>
            {
                var exists = await usersRepository.ExistsByEmailAsync(email, cancellationToken);
                return !exists;
            })
            .WithMessage("Ten adres email jest już zajęty.");
    }
}