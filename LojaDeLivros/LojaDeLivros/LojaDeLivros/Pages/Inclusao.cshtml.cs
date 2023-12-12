using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using LojaDeLivros.Models;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace LojaDeLivros.Pages
{
    public class IncluirProdutoModel : PageModel
    {
        private readonly ServicoBancoDeDados _servicoBancoDeDados;

        [BindProperty]
        public Produto NovoProduto { get; set; }

        public SelectList Marcas { get; set; }

        public IncluirProdutoModel(ServicoBancoDeDados servicoBancoDeDados)
        {
            _servicoBancoDeDados = servicoBancoDeDados;

            // Inicializa Marcas no construtor usando o servi�o
            Marcas = new SelectList(_servicoBancoDeDados.ObterTodasAsMarcas(), "Id", "Nome");

            // Inicializa NovoProduto para evitar valor nulo
            NovoProduto = new Produto();
        }

        public IActionResult OnPost()
        {
            if (ModelState.IsValid)
            {
                _servicoBancoDeDados.AdicionarProduto(NovoProduto);
                return RedirectToPage("/Listagem"); // Redirecionar para a p�gina de listagem ap�s a inclus�o
            }

            // Se houver erros de valida��o, recarregar a p�gina com mensagens de erro
            Marcas = new SelectList(_servicoBancoDeDados.ObterTodasAsMarcas(), "Id", "Nome");
            return Page();
        }
    }
}
