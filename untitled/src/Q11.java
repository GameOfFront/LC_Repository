public class Q11 {
    public static void main(String[] args) {
        double x = 10;
        double y = 0;
        double resultado;

        if (y != 0) {
            resultado = x / y;
        } else {
            resultado = Double.POSITIVE_INFINITY;
        }

        System.out.println("Resultado da divisão: " + resultado);
        System.out.println("fim");
    }
}