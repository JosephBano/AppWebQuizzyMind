using Back.Domain.IRepositories;
using Back.Domain.Models;
using Back.Persistence.Context;
using Microsoft.EntityFrameworkCore;

namespace Back.Persistence.Repositories
{
    public class UsuarioRepositorie: IUsuarioRepositorie
    {
        private readonly AplicationDbContext _context;
        public UsuarioRepositorie(AplicationDbContext context)
        {
            _context = context;
        }

        public async Task SaveUser(Usuario usuario)
        {
            _context.Add(usuario);
            await _context.SaveChangesAsync();
        }

        public async Task<bool> ValidateExistence(Usuario usuario)
        {
            var validateExistence = await _context.Usuario.AnyAsync( e => e.NombreUsuario == usuario.NombreUsuario);
            return validateExistence;
        }
        public async Task<Usuario> ValidatePassword(int idUsuario, string passwordAnterior)
        {
            var usuario =  await _context.Usuario.Where(e => e.Id == idUsuario && e.Password == passwordAnterior).FirstOrDefaultAsync();
            return usuario;
        }
        public async Task UpdatePassword(Usuario usuario)
        {
            _context.Update(usuario);
            await _context.SaveChangesAsync();
        }
    }
}
