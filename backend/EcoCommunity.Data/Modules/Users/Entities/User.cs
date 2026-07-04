namespace EcoCommunity.Data.Modules.Users.Entities;

public class User
{
    private User() { }
    
    public User(string username, string firstName, string lastName, string email, string phoneNumber, string password)
    {
        Username = username;
        FirstName = firstName;
        LastName = lastName;
        Email = email;
        PhoneNumber = phoneNumber;
        Password = password;
        CreatedAt = DateTime.UtcNow;
    }

    public int Id { get; private set; }
    public string Username { get; private set; }
    public string FirstName { get; private set; }
    public string LastName { get; private set; }
    public string Email { get; private set; }
    public string PhoneNumber { get; private set; }
    public DateTime CreatedAt { get; private set; }
    public string Password { get; private set; }

    public void Update(string username, string firstName, string lastName, string email, string phoneNumber, string password)
    {
        Username = username;
        FirstName = firstName;
        LastName = lastName;
        Email = email;
        PhoneNumber = phoneNumber;
        Password = password;
    }
}