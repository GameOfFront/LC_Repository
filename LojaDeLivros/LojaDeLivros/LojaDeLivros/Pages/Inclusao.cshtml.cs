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

            // Inicializa Marcas no construtor usando o serviço
            Marcas = new SelectList(_servicoBancoDeDados.ObterTodasAsMarcas(), "Id", "Nome");

            // Inicializa NovoProduto para evitar valor nulo
            NovoProduto = new Produto();
        }

        public IActionResult OnPost()
        {
            if (ModelState.IsValid)
            {
                _servicoBancoDeDados.AdicionarProduto(NovoProduto);
                return RedirectToPage("/Listagem"); // Redirecionar para a página de listagem após a inclusão
            }

            // Se houver erros de validação, recarregar a página com mensagens de erro
            Marcas = new SelectList(_servicoBancoDeDados.ObterTodasAsMarcas(), "Id", "Nome");
            return Page();
        }
    }
}
