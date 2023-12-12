using System.Collections.Generic;
using System.Linq;
using LojaDeLivros.Models;
using Microsoft.EntityFrameworkCore;

namespace LojaDeLivros.Pages
{
    public class ServicoBancoDeDados
    {
        private readonly LojaDbContext _dbContext;

        public ServicoBancoDeDados(LojaDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Marca> ObterTodasAsMarcas()
        {
            return _dbContext.Marcas.ToList();
        }
        public List<Produto> ObterTodosOsProdutos()
        {
            return _dbContext.Produtos.Include(p => p.Marca).ToList();
        }

        public Produto ObterProdutoPorId(int id)
        {
            return _dbContext.Produtos.Include(p => p.Marca).FirstOrDefault(p => p.Id == id);
        }

        public void AdicionarProduto(Produto novoProduto)
        {
            _dbContext.Produtos.Add(novoProduto);
            _dbContext.SaveChanges();
        }

        public void AtualizarProduto(Produto produtoAtualizado)
        {
            var produtoExistente = _dbContext.Produtos.Find(produtoAtualizado.Id);
            if (produtoExistente != null)
            {
                produtoExistente.Nome = produtoAtualizado.Nome;
                produtoExistente.Preco = produtoAtualizado.Preco;
                produtoExistente.MarcaId = produtoAtualizado.MarcaId; // Atualize conforme necessário
                _dbContext.SaveChanges();
            }
        }

        public void ExcluirProduto(int id)
        {
            var produtoExistente = _dbContext.Produtos.Find(id);
            if (produtoExistente != null)
            {
                _dbContext.Produtos.Remove(produtoExistente);
                _dbContext.SaveChanges();
            }
        }
    }
}