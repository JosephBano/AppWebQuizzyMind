using Back.Domain.IRepositories;
using Back.Domain.Models;
using Back.Persistence.Context;

namespace Back.Persistence.Repositories
{
    
    public class CuestionarioRepositorie: ICuestionarioRepositorie
    {
        private readonly AplicationDbContext _context;

        public CuestionarioRepositorie(AplicationDbContext context) 
        {   
            _context = context; 
        }

        public async Task CreateCuestionario(Cuestionario cuestionario)
        {
            _context.Add(cuestionario);
            await _context.SaveChangesAsync();
        }
    }
}
