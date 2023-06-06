package br.com.programadev.webApplication.leveling.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class HelloWorld {

    @GetMapping
    public int helloWorld() throws Exception {
        int numero = 75;
        String texto = "kim e lc";

        System.out.println(texto.charAt(0));
        System.out.println(texto.toUpperCase());
        System.out.println(texto.toLowerCase());
        System.out.println(texto.isBlank());
        System.out.println(texto.equals("a banana"));
        System.out.println(texto.length());
        System.out.println(texto.endsWith("ple"));
        System.out.println(texto.endsWith("lc"));

        //Cria por baixo dos panos uma nova variavel com valor alterado
        //Variavel original não sofre alteração
        System.out.println(texto.replaceAll("kim", "LJ"));
        System.out.println(texto);
        System.out.println(texto.substring(0, 2));

        Integer numeroAleatorioSofisticado = 75;
        int numeroAleatoriaPrimitivo = 75;

        Boolean isAvailable = null; //Pode ser nullo logo pode ser Optional (opcional)

        isAvailable.equals(true); //NPE (Null Pointer Exception)


        //(mesma coisa)
        //null.algumaCoisa();
        //isAvaiable.algumaCoisa(); (vai estourar NullPointerException)
        //Optional.ofNullable(isAvaiable).  <----- NPE
        if(isAvailable == null){
            throw new Exception("isAvailable está nullo!!!");
        }

//        if(Optional.ofNullable(isAvailable).isPresent()){
//            throw new Exception("isAvailable está nullo!!!");
//        }

//        Optional.ofNullable(isAvailable)
//                .orElseThrow(() -> new Exception("isAvailable está nullo!!!"));

        System.out.printf("Usando variavel texto: %s \n",texto);


        int a = 1;
        int b = 2;

        System.out.printf("calculo %d \n", a + b);

        boolean isActive = true;
        isActive = false;

        System.out.printf("pagamento está ativo? %b", isActive);

        return numero;
    }
}