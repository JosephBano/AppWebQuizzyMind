using Back.Domain.Models;

namespace Back.Domain.IRepositories
{
    public interface IUsuarioRepositorie
    {
        //va a devolver una tarea(Task) nombre(SaveUser) arg(Usuario) medoto interfaz terminado
        Task SaveUser(Usuario usuario);
        Task<bool> ValidateExistence(Usuario usuario);
        Task<Usuario> ValidatePassword(int idUsuarioId, string passwordAnterior);
        Task UpdatePassword(Usuario usuario);
    }
}
