import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

class Resposta {
    private String conteudoJSON;

    public String getConteudoJSON() {
        return conteudoJSON;
    }

    public void setConteudoJSON(String conteudoJSON) {
        this.conteudoJSON = conteudoJSON;
    }

    @Override
    public String toString() {
        return "Resposta{" +
                "conteudoJSON='" + conteudoJSON + '\'' +
                '}';
    }
}

public class Main {
    public static void main(String[] args) {
        try {

            URL url = new URL("https://api.publicapis.org/entries");


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


                Resposta objetoResposta = new Resposta();
                objetoResposta.setConteudoJSON(resposta.toString());


                System.out.println(objetoResposta);
            } else {
                System.out.println("Falha na requisição. Código de resposta: " + respostaCode);
            }


            conexao.disconnect();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}