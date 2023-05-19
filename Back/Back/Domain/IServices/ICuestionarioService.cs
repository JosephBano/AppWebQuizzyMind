using Back.Domain.Models;

namespace Back.Domain.IServices
{
    public interface ICuestionarioService
    {
        Task CreateCuestionario(Cuestionario cuestionario);
    }
}
