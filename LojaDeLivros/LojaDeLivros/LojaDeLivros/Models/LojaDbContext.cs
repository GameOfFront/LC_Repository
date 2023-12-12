using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Reflection.Emit;
using System.Text.RegularExpressions;

namespace LojaDeLivros.Models
{
    public class LojaDbContext : DbContext
    {
        public LojaDbContext(DbContextOptions<LojaDbContext> options) : base(options)
        {
        }

        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Marca> Marcas { get; set; }
        // Adicione outras DbSet conforme necessário para outros modelos

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Produto>()
                .HasOne(p => p.Marca)
                .WithMany()
                .HasForeignKey(p => p.MarcaId);
        }
    }
}
