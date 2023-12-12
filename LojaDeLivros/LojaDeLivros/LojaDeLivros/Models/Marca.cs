using System.ComponentModel.DataAnnotations;

namespace LojaDeLivros.Models
{
    public class Marca
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "O campo Nome da Marca é obrigatório.")]
        public string Nome { get; set; }

        // Adicione mais propriedades conforme necessário para representar informações da marca
    }
}
