package org.example;

import java.util.List;
import java.util.Scanner;

public class Main {
    private static Usuario usuario;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Bem-vindo ao Sistema de Registro de Livros!");


        System.out.print("Digite seu nome de usuário: ");
        String nomeUsuario = scanner.nextLine();
        usuario = new Usuario(nomeUsuario);


        while (true) {
            System.out.println("\nMenu Principal:");
            System.out.println("1. Novo Registro");
            System.out.println("2. Meu Usuário");
            System.out.println("3. Suporte");
            System.out.println("4. Sair");

            System.out.print("Escolha a opção: ");
            int escolha = scanner.nextInt();
            scanner.nextLine(); // Limpar o buffer

            switch (escolha) {
                case 1:
                    novoRegistro(scanner);
                    break;
                case 2:
                    meuUsuario();
                    break;
                case 3:
                    suporte();
                    break;
                case 4:
                    System.out.println("Obrigado por acessar nosso sistema, " + usuario.getNome() + "!");
                    System.exit(0);
                    break;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        }
    }

    private static void novoRegistro(Scanner scanner) {
        System.out.println("Indique o caminho(diretório) onde se encontra o arquivo para entrada dos dados:");
        String caminhoDoArquivo = scanner.nextLine();


        java.io.File arquivo = new java.io.File(caminhoDoArquivo);
        if (!arquivo.exists()) {
            System.out.println("Arquivo não encontrado. Certifique-se de que o caminho esteja correto.");
            return;
        }


        if (!arquivo.isFile()) {
            System.out.println("O caminho especificado não aponta para um arquivo válido.");
            return;
        }


        if (!arquivo.canRead()) {
            System.out.println("Não é possível ler o arquivo. Verifique as permissões de leitura.");
            return;
        }


        if (arquivo.length() == 0) {
            System.out.println("O arquivo está vazio. Nenhum dado para processar.");
            return;
        }

        System.out.println("Caminho do arquivo: " + caminhoDoArquivo);

        List<Livro> livros = LivroLoader.carregarLivros(caminhoDoArquivo);

        if (livros.isEmpty()) {
            System.out.println("Nenhum livro encontrado no arquivo.");
        } else {
            exibirLivros(livros);

            System.out.print("Tem certeza que deseja incluir esses dados na base? (sim ou nao): ");
            String resposta = scanner.nextLine();

            if ("sim".equalsIgnoreCase(resposta)) {
                salvarDados(livros);
                System.out.println("Dados inclusos com sucesso!");
            } else {
                System.out.println("Os dados não foram inclusos.");
            }
        }
    }

    private static void exibirLivros(List<Livro> livros) {
        System.out.println("\nLivros disponíveis:");
        for (Livro livro : livros) {
            System.out.println(livro.getNome() + " - " + livro.getAutor() + " (" + livro.getAno() + ")");
        }
    }

    private static void salvarDados(List<Livro> livros) {
        usuario.getLivros().addAll(livros);
    }

    private static void meuUsuario() {
        System.out.println("\nLivros registrados por " + usuario.getNome() + ":");
        for (Livro livro : usuario.getLivros()) {
            System.out.println(livro.getNome() + " - " + livro.getAutor() + " (" + livro.getAno() + ")");
        }
    }

    private static void suporte() {
        System.out.println("\nEsse é um sistema que tem como objetivo possibilitar que o usuário registre os livros que leu e tenha um controle na hora da sua experiência de entretenimento! \nEm caso de problemas, contatar o suporte técnico através do email: suporte_tecnico@gmail.com");
    }
}
