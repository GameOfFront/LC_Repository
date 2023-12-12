using System;
using System.ComponentModel.DataAnnotations;

namespace LojaDeLivros.Models
{
    public class Produto
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "O campo Nome é obrigatório.")]
        public string Nome { get; set; }

        public int MarcaId { get; set; } // esta propriedade é uma convenção para chave estrangeira
        public Marca Marca { get; set; } // esta é a propriedade de navegação

        [Required(ErrorMessage = "O campo Preço é obrigatório.")]
        [Range(0.01, double.MaxValue, ErrorMessage = "O preço deve ser maior que zero.")]
        public double Preco { get; set; }


        // Adicione mais propriedades conforme necessário para representar seus produtos ou serviços
    }
}
