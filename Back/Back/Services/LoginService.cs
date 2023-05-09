using Back.Domain.IRepositories;
using Back.Domain.IServices;
using Back.Domain.Models;

namespace Back.Services
{
    public class LoginService: ILoginService
    {
        private readonly ILoginRepositorie _loginRepositorie;  // Esto es inyeccion de dependecias!!!
        public LoginService(ILoginRepositorie loginRepositorie)
        {
            _loginRepositorie = loginRepositorie;  // Esto es inyeccion de dependecias!!!
        }
        public async Task<Usuario> ValidateUser(Usuario usuario)
        {
            return await _loginRepositorie.ValidateUser(usuario);
        }
    }
}
