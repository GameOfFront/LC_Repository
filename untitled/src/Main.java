import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Crie um objeto Scanner para ler a entrada do usuário
        Scanner scanner = new Scanner(System.in);

        // Solicita ao usuário o nome do aluno
        System.out.println("Digite o nome do aluno: ");
        String nomeAluno = scanner.nextLine();

        // Fecha o scanner, pois não vamos usá-lo mais
        scanner.close();

        // Chama o método para inverter o nome e imprime o resultado
        String nomeInvertido = inverterNome(nomeAluno);
        System.out.println("Nome invertido: " + nomeInvertido);
    }

    public static String inverterNome(String nome) {
        // Cria uma String Builder para inverter o nome
        StringBuilder nomeInvertido = new StringBuilder(nome);
        nomeInvertido.reverse();

        return nomeInvertido.toString();
    }
}