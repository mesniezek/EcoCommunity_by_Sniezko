namespace EcoCommunity.Data.Modules.Users.Dto;

public record UserDetailsDto(
    int Id,
    string Username,
    string FirstName,
    string LastName,
    string Email,
    string PhoneNumber,
    DateTime CreatedAt
);