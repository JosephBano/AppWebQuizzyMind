using Back.Domain.Models;

namespace Back.Domain.IServices
{
    public interface ILoginService
    {
        Task<Usuario> ValidateUser(Usuario usuario);
    }
}
