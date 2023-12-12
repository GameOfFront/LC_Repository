import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

class Pessoa2 {
    private String nome;
    private int idade;

    public Pessoa2(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    @Override
    public String toString() {
        return "Nome: " + nome + ", Idade: " + idade;
    }
}

public class Q7 {
    public static void main(String[] args) {
        String nomeParaConsulta = "Luiz";

        try {

            URL url = new URL("https://api.agify.io/?name=" + nomeParaConsulta);


            HttpURLConnection conexao = (HttpURLConnection) url.openConnection();


            conexao.setRequestMethod("GET");


            int respostaCode = conexao.getResponseCode();
            if (respostaCode == HttpURLConnection.HTTP_OK) {

                BufferedReader leitor = new BufferedReader(new InputStreamReader(conexao.getInputStream()));
                StringBuilder resposta = new StringBuilder();
                String linha;
                while ((linha = leitor.readLine()) != null) {
                    resposta.append(linha);
                }
                leitor.close();


                ObjectMapper objectMapper = new ObjectMapper();
                JsonNode jsonNode = objectMapper.readTree(resposta.toString());

                String nome = jsonNode.get("name").asText();
                int idade = jsonNode.get("age").asInt();

                Pessoa pessoa = new Pessoa(nome, idade);


                System.out.println(pessoa);
            } else {
                System.out.println("Falha na requisição. Código de resposta: " + respostaCode);
            }


            conexao.disconnect();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}