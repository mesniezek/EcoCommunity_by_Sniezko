using EcoCommunity.Data.Modules.Users.Commands;
using EcoCommunity.Data.Modules.Users.Dto;
using EcoCommunity.Data.Modules.Users.Entities;
using EcoCommunity.Data.Modules.Users.Queries;
using Microsoft.AspNetCore.Mvc;
using MediatR;

namespace EcoCommunity.API.Controllers
{
    [ApiController]
    [Route("users")]
    public class UsersController(IMediator mediator) : ControllerBase
    {
        [HttpPost, Route("create")]
        public Task<int> CreateUser(UserParams input, CancellationToken cancellationToken)
            => mediator.Send(new UserCreateCommand(input), cancellationToken);
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserDto>>> GetUsers(CancellationToken cancellationToken)
        {
            var result = await mediator.Send(new UsersQuery(), cancellationToken);
            return Ok(result);
        }

        [HttpGet("id")]
        public async Task<ActionResult<UserDto>> GetUserById(int id, CancellationToken cancellationToken)
        {
            var result = await mediator.Send(new UserDetailsQuery(id), cancellationToken);
            
            if (result == null) 
                return NotFound($"Użytkownik o ID {id} nie istnieje.");

            return Ok(result);
        }
        
        [HttpDelete, Route("id")]
        public async Task<Unit> DeleteUserById(int id, CancellationToken cancellationToken)
            => await mediator.Send(new UserDeleteCommand(id), cancellationToken);
        
        [HttpPut, Route("id")]
        public async Task<int> UpdateUserById(int id, UserParams input, CancellationToken cancellationToken)
            => await mediator.Send(new UserUpdateCommand(id, input), cancellationToken);
    }
}