using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Back.Domain.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        
        [Required]
        [Column(TypeName = "varchar(30)")]
        public string NombreUsuario { get; set; }

        [Required]
        [Column(TypeName = "varchar(300)")]
        public string Password { get; set;}
    }
}
