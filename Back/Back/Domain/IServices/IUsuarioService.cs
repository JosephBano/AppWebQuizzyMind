using Back.Domain.Models;

namespace Back.Domain.IServices
{
    public interface IUsuarioService
    {
        Task SaveUser(Usuario usuario);
        Task<bool> ValidateExistence(Usuario usuario);
        Task<Usuario> ValidatePassword(int idUsuario, string passwordAnterior);
        Task UpdatePassword(Usuario usuario);
    }
}
