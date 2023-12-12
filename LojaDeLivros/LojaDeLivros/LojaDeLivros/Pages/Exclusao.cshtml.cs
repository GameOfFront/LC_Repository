using LojaDeLivros.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace LojaDeLivros.Pages
{
    public class ExclusaoModel : PageModel
    {
        private readonly ServicoBancoDeDados _servicoBancoDeDados;

        public ExclusaoModel(ServicoBancoDeDados servicoBancoDeDados)
        {
            _servicoBancoDeDados = servicoBancoDeDados;
        }

        [BindProperty(SupportsGet = true)]
        public int? Id { get; set; }

        public Produto Produto { get; set; }

        public IActionResult OnGet()
        {
            if (Id == null)
            {
                return NotFound();
            }

            Produto = _servicoBancoDeDados.ObterProdutoPorId(Id.Value);

            if (Produto == null)
            {
                return NotFound();
            }

            return Page();
        }

        public IActionResult OnPostExcluir(int id)
        {
            if (id == null)
            {
                return NotFound();
            }

            _servicoBancoDeDados.ExcluirProduto(id);

            return RedirectToPage("./Listagem");
        }
    }
}
