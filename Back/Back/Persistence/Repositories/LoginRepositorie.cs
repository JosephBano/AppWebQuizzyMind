using Back.Domain.IRepositories;
using Back.Domain.Models;
using Back.Persistence.Context;
using Microsoft.EntityFrameworkCore;

namespace Back.Persistence.Repositories
{
    public class LoginRepositorie: ILoginRepositorie
    {
        private readonly AplicationDbContext _aplicationDbContext; // Esto es inyeccion de dependecias!!!
        public LoginRepositorie(AplicationDbContext aplicationDbContext)
        {
            _aplicationDbContext = aplicationDbContext; // Esto es inyeccion de dependecias
        }
        public async Task<Usuario> ValidateUser(Usuario usuario)
        {
            var user = await _aplicationDbContext.Usuario.Where(e => e.NombreUsuario == usuario.NombreUsuario && e.Password == usuario.Password).FirstOrDefaultAsync();
            return user;
        }
    }
}
