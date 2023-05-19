using Back.Domain.IServices;
using Back.Domain.Models;
using System.Threading.Tasks;
using Back.Utils;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CuestionarioController : ControllerBase
    {
        private readonly ICuestionarioService _cuestionarioService;
        public CuestionarioController(ICuestionarioService cuestionarioService)
        {
            _cuestionarioService = cuestionarioService;
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Post([FromBody]Cuestionario cuestionario)
        {
            try
            {
                var identity = HttpContext.User.Identity as ClaimsIdentity;
                int idUsuario = JwtConfigurator.GetTokenIdUsuario(identity);

                cuestionario.UsuarioId = idUsuario; 
                cuestionario.Activo = 1;
                cuestionario.FechaCreacion = DateTime.Now;
                await _cuestionarioService.CreateCuestionario(cuestionario);

                return Ok(new { message = "todo ok" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
