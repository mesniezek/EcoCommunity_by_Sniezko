namespace EcoCommunity.Data.Modules.Users.Dto;

public record UserDto
(
    int Id,
    string Username,
    string Email,
    string PhoneNumber
);