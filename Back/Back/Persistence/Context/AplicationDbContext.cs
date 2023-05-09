using Back.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Back.Persistence.Context
{
    public class AplicationDbContext : DbContext
    {
        public DbSet<Usuario> Usuario { get; set; }
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options)
        {

        }
    }
}
