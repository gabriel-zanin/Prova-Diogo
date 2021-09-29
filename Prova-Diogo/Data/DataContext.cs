using Microsoft.EntityFrameworkCore;
using CrudMusic.Models;

namespace CrudMusic.Data
{
    public class DataContext : DbContext
    {
        //Contrutor
        public DataContext (DbContextOptions<DataContext> options) : base (options) { }
        
        //Lista de propriedades das classes de  modelo que vão virar tabelas no banco

        public DbSet<Music> Musics { get; set; }

    }
}