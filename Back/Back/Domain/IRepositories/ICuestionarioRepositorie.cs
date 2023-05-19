using Back.Domain.Models;

namespace Back.Domain.IRepositories
{
    public interface ICuestionarioRepositorie
    {
        Task CreateCuestionario(Cuestionario cuestionario);
    }
}
