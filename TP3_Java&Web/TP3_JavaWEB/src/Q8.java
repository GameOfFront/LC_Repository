import org.json.JSONArray;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

public class Q8 {

    public static void main(String[] args) {
        List<Universidade> universidades = fazerRequisicao();

        // Imprimir a lista de universidades
        for (Universidade universidade : universidades) {
            System.out.println(universidade);
        }
    }

    public static List<Universidade> fazerRequisicao() {
        List<Universidade> universidades = new ArrayList<>();

        try {
            // URL da API
            URL url = new URL("http://universities.hipolabs.com/search?country=Brazil");

            // Abrir conexão
            HttpURLConnection conexao = (HttpURLConnection) url.openConnection();

            // Configurar método GET
            conexao.setRequestMethod("GET");

            // Obter a resposta
            int respostaCodigo = conexao.getResponseCode();

            if (respostaCodigo == HttpURLConnection.HTTP_OK) {
                // Ler a resposta
                BufferedReader leitor = new BufferedReader(new InputStreamReader(conexao.getInputStream()));
                StringBuilder resposta = new StringBuilder();
                String linha;

                while ((linha = leitor.readLine()) != null) {
                    resposta.append(linha);
                }
                leitor.close();

                JSONArray arrayUniversidades = new JSONArray(resposta.toString());

                for (int i = 0; i < arrayUniversidades.length(); i++) {
                    JSONObject objUniversidade = arrayUniversidades.getJSONObject(i);

                    String nome = objUniversidade.getString("name");

                    JSONArray webPagesArray = objUniversidade.getJSONArray("web_pages");
                    String urlUniversidade = webPagesArray.getString(0);

                    Universidade universidade = new Universidade(nome, urlUniversidade);
                    universidades.add(universidade);
                }
            } else {
                System.out.println("Falha na requisição. Código de resposta: " + respostaCodigo);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return universidades;
    }
}

class Universidade {
    private String nome;
    private String url;

    public Universidade(String nome, String url) {
        this.nome = nome;
        this.url = url;
    }

    @Override
    public String toString() {
        return "Universidade{" +
                "nome='" + nome + '\'' +
                ", url='" + url + '\'' +
                '}';
    }
}