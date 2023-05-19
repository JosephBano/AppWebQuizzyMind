using Back.Domain.IRepositories;
using Back.Domain.IServices;
using Back.Domain.Models;

namespace Back.Services
{
    public class CuestionarioService: ICuestionarioService
    {
        private readonly ICuestionarioRepositorie _services;
        public CuestionarioService(ICuestionarioRepositorie services)
        {
            _services = services;
        }

        public async Task CreateCuestionario(Cuestionario cuestionario)
        {
            await _services.CreateCuestionario(cuestionario);
        }
    }
}
