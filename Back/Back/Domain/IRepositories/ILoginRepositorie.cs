using Back.Domain.Models;

namespace Back.Domain.IRepositories
{
    public interface ILoginRepositorie
    {
        Task<Usuario> ValidateUser(Usuario usuario);
    }
}
