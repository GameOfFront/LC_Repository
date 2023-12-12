using LojaDeLivros.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace LojaDeLivros.Pages
{
    public class ListagemModel : PageModel
    {
        private readonly ServicoBancoDeDados _servicoBancoDeDados;

        public ListagemModel(ServicoBancoDeDados servicoBancoDeDados)
        {
            _servicoBancoDeDados = servicoBancoDeDados;
        }

        public List<Produto> ListaDeProdutos { get; set; }

        public void OnGet()
        {
            ListaDeProdutos = _servicoBancoDeDados.ObterTodosOsProdutos();
        }
    }
}
