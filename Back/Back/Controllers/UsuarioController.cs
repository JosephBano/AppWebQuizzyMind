using Back.Domain.IServices;
using Back.Domain.Models;
using Back.DTO;
using Back.Utils;
using Microsoft.AspNetCore.Mvc;

namespace Back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : Controller
    {
        private readonly IUsuarioService _usuarioService;
        public UsuarioController(IUsuarioService usuarioService) 
        {
            _usuarioService = usuarioService;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Usuario usuario)
        {
            try 
            {
                var validateExistence = await _usuarioService.ValidateExistence(usuario);
                if(validateExistence) 
                {
                    return BadRequest( new { message = "El usuario " + usuario.NombreUsuario + " ya existe! Intenta con otro usuario" });
                }
                usuario.Password = Encriptar.EncriptarPassword(usuario.Password);
                await _usuarioService.SaveUser(usuario);
                return Ok( new { message = "Usuario registrado correctamene!" });
            }
            catch (Exception ex) 
            {
                return BadRequest(ex.Message);
            }
        }

        //localhost:xxx/api/Usuario/CambiarPassword
        [Route("CambiarPassword")]
        [HttpPut]
        public async Task<IActionResult> CambiarPassword([FromBody] CambiarPasswordDTO cambiarPassword)
        {
            try
            {
                int idUsuario = 3;
                string passwordEncriptado = Encriptar.EncriptarPassword(cambiarPassword.passwordAnterior);
                var usuario = await _usuarioService.ValidatePassword(idUsuario, passwordEncriptado);
                if(usuario == null)
                {
                    return BadRequest(new { message = "La password es incorrecta!" });
                }
                else
                {
                    usuario.Password = Encriptar.EncriptarPassword(cambiarPassword.nuevaPassword);
                    await _usuarioService.UpdatePassword(usuario);
                    return Ok(new { message = "La password fue actualizada con exito!" });
                }
                
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
