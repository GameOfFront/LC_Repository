package org.example;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;
import java.util.Optional;
import java.util.Scanner;

@SpringBootApplication
public class SistemaLivros implements CommandLineRunner {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private LivroRepository livroRepository;

    @Autowired
    private EnderecoRepository EnderecoRepository;

    private static Scanner scanner;

    private final CepService cepService;

    public SistemaLivros(CepService cepService) {
        this.cepService = cepService;
        this.scanner = new Scanner(System.in);
    }

    public static void main(String[] args) {
        SpringApplication.run(SistemaLivros.class, args);
    }

    @Override
    public void run(String... args) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

        scanner = new Scanner(System.in);

        while (true) {
            System.out.println("\nBem-Vindo ao Menu Principal:");
            System.out.println("1. Acessar");
            System.out.println("2. Cadastrar");
            System.out.println("3. Sair");

            int opcao = scanner.nextInt();
            scanner.nextLine();

            switch (opcao) {
                case 1:
                    acessarUsuario();
                    break;
                case 2:
                    cadastrarUsuario();
                    break;
                case 3:
                    System.out.println("Desfrute da experiência do nosso sistema!");
                    System.exit(0);
                default:
                    System.out.println("Ops! Opção inválida, tente outra na próxima.");
            }
        }
    }

    private void acessarUsuario() {
        System.out.println("Informe o email a seguir:");
        String email = scanner.nextLine();
        System.out.println("Informe a senha a seguir:");
        String senha = scanner.nextLine();

        Optional<Usuario> usuarioOptional = Optional.ofNullable(usuarioRepository.findByEmailAndSenha(email, senha));

        if (usuarioOptional.isPresent()) {
            Usuario usuario = usuarioOptional.get();
            menuUsuario(usuario.getNome(), email, usuario.getId());
        } else {
            System.out.println("Email ou senha incorretos, verifique e tente novamente!");
            menuAcessarNovamenteOuSair();
        }
    }

    private void menuAcessarNovamenteOuSair() {
        System.out.println("Opções:");
        System.out.println("1. Acessar novamente");
        System.out.println("2. Sair");

        int opcao = scanner.nextInt();
        scanner.nextLine();

        switch (opcao) {
            case 1:
                acessarUsuario();
                break;
            case 2:
                System.out.println("Obrigado por acessar nosso sistema!");
                System.exit(0);
                break;
            default:
                System.out.println("Ops! Opção inválida.");
                menuAcessarNovamenteOuSair();
        }
    }

    private void menuUsuario(String nomeUsuario, String emailUsuario, Long idUsuario) {
        while (true) {
            System.out.println("\nSeja Bem-Vindo(a) " + nomeUsuario + ", aproveite o sistema!");
            System.out.println("Opções:");
            System.out.println("1. Novo Registro");
            System.out.println("2. Meu Usuário");
            System.out.println("3. Suporte");
            System.out.println("4. Sair");

            int opcao = scanner.nextInt();
            scanner.nextLine();

            switch (opcao) {
                case 1:
                    novoRegistro(nomeUsuario, emailUsuario, idUsuario);
                    break;
                case 2:
                    meuUsuario(nomeUsuario, emailUsuario, idUsuario);
                    break;
                case 3:
                    suporte();
                    break;
                case 4:
                    System.out.println("Obrigado por acessar nosso sistema " + nomeUsuario + "!");
                    System.exit(0);
                    break;
                default:
                    System.out.println("Ops! Opção inválida");
            }
        }
    }

    private void cadastrarUsuario() {
        System.out.println("Informe o Nome do seu Usuário:");
        String nomeUsuario = scanner.nextLine();
        System.out.println("Informe o Email do seu Usuário:");
        String emailUsuario = scanner.nextLine();
        System.out.println("Informe a Senha do seu Usuário:");
        String senhaUsuario = scanner.nextLine();

        Usuario novoUsuario = new Usuario(nomeUsuario, emailUsuario, senhaUsuario);
        usuarioRepository.save(novoUsuario);

        System.out.println("Opa!! Usuário cadastrado com sucesso!");

        menuUsuario(nomeUsuario, emailUsuario, novoUsuario.getId());
    }

    private void novoRegistro(String nomeUsuario, String emailUsuario, Long idUsuario) {
        System.out.println("Informe o nome do livro da vez:");
        String nomeLivro = scanner.nextLine();
        System.out.println("Você recomendaria esse livro para alguém?");
        String recomendacaoLivro = scanner.nextLine();
        float notaLivro = lerFloat("Qual nota para esse livro leva?(De 0 a 10)");
        System.out.println("Informe o CEP da livraria onde adquiriu esse livro:");
        String cepLivro = scanner.nextLine();

        Endereco endereco = cepService.buscarEnderecoPorCep(cepLivro);
        EnderecoRepository.save(endereco);

        Livro novoLivro = new Livro();
        novoLivro.setUsuario(usuarioRepository.findById(idUsuario).orElseThrow());
        novoLivro.setNomeLivro(nomeLivro);
        novoLivro.setNotaLivro(notaLivro);
        novoLivro.setRecomendacaoLivro(recomendacaoLivro);
        novoLivro.setCep(cepLivro);
        novoLivro.setEndereco(endereco);

        livroRepository.save(novoLivro);

        System.out.println("Novo registro criado com sucesso!");
    }


    private static float lerFloat(String mensagem) {
        float valor = 0.0F;
        boolean entradaValida = false;

        do {
            try {
                System.out.println(mensagem);
                valor = Float.parseFloat(scanner.nextLine());
                entradaValida = true;
            } catch (NumberFormatException e) {
                System.out.println("Por favor, digite um número válido.");
            }
        } while (!entradaValida);

        return valor;
    }

    private void meuUsuario(String nomeUsuario, String emailUsuario, Long idUsuario) {
        System.out.println("Livros do Usuário:");

        List<Livro> livros = livroRepository.findByUsuario(usuarioRepository.findById(idUsuario).orElseThrow());

        for (int numRegistro = 1; numRegistro <= livros.size(); numRegistro++) {
            Livro livro = livros.get(numRegistro - 1);
            System.out.println(numRegistro + ". " + livro.getNomeLivro());
        }

        menuEditarExcluir(idUsuario);
    }

    private void suporte() {
        System.out.println("Em caso de problemas técnico, entre em contato através do email: suporte_livros_sistema@hotmail.com \nNosso sistema possibilita ao usuário uma fonte de controle para seus livros lidos, garantindo assim uma memória da experiência de entretenimento!");
    }

    private void menuEditarExcluir(Long idUsuario) {
        System.out.println("Opções:");
        System.out.println("1. Editar registros");
        System.out.println("2. Excluir registros");
        System.out.println("3. Voltar");

        int opcao = scanner.nextInt();
        scanner.nextLine();

        switch (opcao) {
            case 1:
                editarLivro(idUsuario);
                break;
            case 2:
                excluirLivro(idUsuario);
                break;
            case 3:
                break;
            default:
                System.out.println("Ops! Opção inválida");
                menuEditarExcluir(idUsuario);
        }
    }

    private void excluirLivro(Long idUsuario) {
        System.out.println("Indique o id do livro que deseja excluir:");
        int numLivro = scanner.nextInt();
        scanner.nextLine();

        List<Livro> livros = livroRepository.findByUsuario(usuarioRepository.findById(idUsuario).orElseThrow());

        if (numLivro >= 1 && numLivro <= livros.size()) {
            Livro livroParaExcluir = livros.get(numLivro - 1);
            livroRepository.delete(livroParaExcluir);
            System.out.println("Livro excluído com sucesso!");
        } else {
            System.out.println("Id de livro inválido.");
        }
    }

    private void editarLivro(Long idUsuario) {
        System.out.println("Indique o número do livro que deseja editar:");
        int numLivro = scanner.nextInt();
        scanner.nextLine();

        List<Livro> livros = livroRepository.findByUsuario(usuarioRepository.findById(idUsuario).orElseThrow());

        if (numLivro >= 1 && numLivro <= livros.size()) {
            Livro livroParaEditar = livros.get(numLivro - 1);

            System.out.println("Nome do Livro:");
            String novoNomeLivro = scanner.nextLine();
            System.out.println("Você recomendaria esse livro para alguém?");
            String novaRecomendacaoLivro = scanner.nextLine();
            float novaNotaLivro = lerFloat("Qual nota para esse livro? (De 0 a 10)");
            System.out.println("Informe o CEP da livraria onde adquiriu esse livro:");
            String novoCepLivro = scanner.nextLine();

            livroParaEditar.setNomeLivro(novoNomeLivro);
            livroParaEditar.setNotaLivro(novaNotaLivro);
            livroParaEditar.setRecomendacaoLivro(novaRecomendacaoLivro);
            livroParaEditar.setCep(novoCepLivro);
            livroRepository.save(livroParaEditar);
            System.out.println("Livro editado com sucesso!");
        } else {
            System.out.println("Id do livro inválido.");
        }
    }
}
