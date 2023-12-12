import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import org.json.JSONObject;

class Pessoa {
    private String nome;
    private int idade;

    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    @Override
    public String toString() {
        return "Nome: " + nome + ", Idade: " + idade;
    }
}

public class Q6 {
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


                JSONObject json = new JSONObject(resposta.toString());
                String nome = json.getString("name");
                int idade = json.getInt("age");

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
