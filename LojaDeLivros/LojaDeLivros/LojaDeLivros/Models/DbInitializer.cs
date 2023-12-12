using System;
using System.Linq;

namespace LojaDeLivros.Models
{
    public class DbInitializer
    {
        public static void Initialize(LojaDbContext context)
        {
            context.Database.EnsureCreated(); // Garante que o banco de dados foi criado

            // Verifica se já existem produtos
            if (context.Produtos.Any())
            {
                return; // O banco de dados já foi inicializado
            }

            // Adicione aqui a lógica para adicionar produtos e marcas iniciais ao seu banco de dados
            // Exemplo:
            var marca = new Marca { Nome = "Marca A" };
            context.Marcas.Add(marca);

            var produto = new Produto
            {
                Nome = "Livro 1",
                Preco = 29.99,
                Marca = marca // Associa o produto à marca criada
            };
            context.Produtos.Add(produto);

            // Adicione mais produtos e marcas conforme necessário

            context.SaveChanges(); // Salva as alterações no banco de dados
        }
    }
}
