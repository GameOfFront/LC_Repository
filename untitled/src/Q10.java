public class Q10 {
    public static void main(String[] args) {
        for (int numero = 1; numero <= 100; numero++) {
            if (ehPrimo(numero)) {
                System.out.println("Número primo: " + numero);
            }
        }
    }

    public static boolean ehPrimo(int numero) {
        if (numero <= 1) {
            return false;
        }
        if (numero <= 3) {
            return true;
        }
        if (numero % 2 == 0 || numero % 3 == 0) {
            return false;
        }
        for (int i = 5; i * i <= numero; i += 6) {
            if (numero % i == 0 || numero % (i + 2) == 0) {
                return false;
            }
        }
        return true;
    }
}