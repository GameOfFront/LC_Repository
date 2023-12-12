import java.util.Scanner;

public class Q7 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite um número inteiro de três dígitos: ");
        int numero = scanner.nextInt();

        if (numero >= 100 && numero <= 999) {
            int digito1 = numero % 10;
            int digito2 = (numero / 10) % 10;
            int digito3 = numero / 100;

            int numeroInvertido = (digito1 * 100) + (digito2 * 10) + digito3;

            System.out.println("Número invertido: " + numeroInvertido);
        } else {
            System.out.println("O número não é um inteiro de três dígitos.");
        }

        scanner.close();
    }
}
