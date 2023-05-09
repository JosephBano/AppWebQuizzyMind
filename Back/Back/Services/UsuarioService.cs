using Back.Domain.IRepositories;
using Back.Domain.IServices;
using Back.Domain.Models;

namespace Back.Services
{
    public class UsuarioService: IUsuarioService
    {
        private readonly IUsuarioRepositorie _usuarioRepositorie;
        public UsuarioService(IUsuarioRepositorie usuarioRepositorie)
        {
            _usuarioRepositorie = usuarioRepositorie;
        }
        public async Task SaveUser(Usuario usuario)
        {
            await _usuarioRepositorie.SaveUser(usuario);
        }
        public async Task<bool> ValidateExistence(Usuario usuario)
        {
            return await _usuarioRepositorie.ValidateExistence(usuario);
        }
        public async Task<Usuario> ValidatePassword(int idUsuario, string passwordAnterior)
        {
            return await _usuarioRepositorie.ValidatePassword(idUsuario, passwordAnterior);
        }
        public async Task UpdatePassword(Usuario usuario)
        {
            await _usuarioRepositorie.UpdatePassword(usuario);
        }
    }
}
