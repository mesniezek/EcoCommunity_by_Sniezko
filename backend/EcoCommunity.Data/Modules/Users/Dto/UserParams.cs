namespace EcoCommunity.Data.Modules.Users.Dto;

public class UserParams(
        string username,
        string firstName,
        string lastName,
        string email,
        string phoneNumber,
        string password
    )
{
    public string Username { get; set; } = username;
    public string FirstName { get; set; } = firstName;
    public string LastName { get; set; } = lastName;
    public string Email { get; set; } = email;
    public string PhoneNumber { get; set; } = phoneNumber;
    public string Password { get; set; }  = string.Empty;
}