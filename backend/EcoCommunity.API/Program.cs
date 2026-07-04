using EcoCommunity.Data;
using EcoCommunity.Data.Common.Behaviors;
using EcoCommunity.Data.Modules.Users.Repositories;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddOpenApi();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<EcoCommunityDbContext>(options =>
    options.UseSqlServer(connectionString));

builder.Services.AddScoped<IUsersRepository, UsersRepository>();
builder.Services.AddMediatR(cfg => {
    cfg.RegisterServicesFromAssembly(typeof(EcoCommunityDbContext).Assembly);
    cfg.AddOpenBehavior(typeof(ValidationBehavior<,>));
});
builder.Services.AddValidatorsFromAssembly(typeof(EcoCommunityDbContext).Assembly);

var app = builder.Build();

app.MapGet("/", () => "EcoCommunity API is running!");

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    try
    {
        var context = services.GetRequiredService<EcoCommunityDbContext>();
        context.Database.Migrate(); 
    }
    catch (Exception ex)
    {
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "Wystąpił błąd podczas aplikowania migracji bazy danych.");
    }
}

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();