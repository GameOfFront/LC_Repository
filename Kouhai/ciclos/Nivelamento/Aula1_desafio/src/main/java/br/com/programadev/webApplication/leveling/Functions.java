package br.com.programadev.webApplication.leveling;

public class Functions {

    public static void init(){
        int numeroA = 15;
        int numeroB = 30;
        int numeroC = 45;

        mostrar("Numero A: ", numeroA);

        var resultadoSoma = somar(numeroA, numeroB, numeroC);
        mostrar("Resultado soma: ", resultadoSoma);

        var resultadoDivisao = dividir(numeroA, numeroB);
        mostrar("Resultado divisao: ", resultadoDivisao);

        var ehMaior = ehMaior(resultadoSoma, resultadoDivisao);
        mostrar("Resultado Soma > Divisao: ", ehMaior);

        var ehIgual = ehIgual(resultadoSoma, resultadoDivisao);
        mostrar("Resultado Soma == Divisao: ", ehIgual);

        var resultadoMultiplicacao = multiplicacao(numeroA, numeroB);
        mostrar("Resultado da multiplicação: ", resultadoMultiplicacao);

        var resultadoResto = resto(numeroA, numeroC);
        mostrar("Resultado de resto: ", resultadoResto);

        var resultadoParOuImpar = parOuImpar(numeroA);
        mostrar("O numero é par?: ", resultadoParOuImpar);

        //Regra: 2 linhas
        //Multiplicao
        //Resto
        //Verificar se par ou impar
    }

    private static void mostrar(String texto, Integer numero){
        System.out.println(texto + numero);
    }

    private static void mostrar(String texto, Double numero){
        System.out.println(texto + numero);
    }

    private static void mostrar(String texto, Boolean bool){
        System.out.println(texto + bool);
    }

    private static Integer somar(Integer numeroA, Integer numeroB, Integer numeroC){
        return numeroA + numeroB + numeroC;
    }

    private static Double dividir(Integer numeroA, Integer numeroB){
        return (double) numeroA / numeroB;
    }

    private static Boolean ehMaior(Integer numeroA, Double numeroB){
        return numeroA > numeroB;
    }

    private static Boolean ehIgual(Integer numeroA, Double numeroB){
        return Double.valueOf(numeroA).equals(numeroB);
    }

    private static Double multiplicacao(Integer numeroA, Integer numeroB) {
        return (double) numeroA * numeroB;
    }

    private static Double resto(Integer numeroA, Integer numeroC) {
        return (double) numeroA % numeroC;
    }

    private static Boolean parOuImpar(Integer numeroA) {
        return numeroA % 2 == 0;
    }

}