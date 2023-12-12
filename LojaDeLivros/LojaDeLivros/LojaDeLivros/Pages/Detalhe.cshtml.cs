// Detalhe.cshtml.cs
using LojaDeLivros.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace LojaDeLivros.Pages
{
    public class DetalheModel : PageModel
    {
        private readonly ServicoBancoDeDados _servicoBancoDeDados;

        public DetalheModel(ServicoBancoDeDados servicoBancoDeDados)
        {
            _servicoBancoDeDados = servicoBancoDeDados;
        }

        public Produto Produto { get; set; }

        public void OnGet(int id)
        {
            Produto = _servicoBancoDeDados.ObterProdutoPorId(id);
        }
    }
}
