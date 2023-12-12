import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Q9 {

    public static void main(String[] args) {
        List<Universidade> universidades = fazerRequisicao();


        for (Universidade universidade : universidades) {
            System.out.println(universidade);
        }
    }

    public static List<Universidade> fazerRequisicao() {
        List<Universidade> universidades = new ArrayList<>();

        try {

            URL url = new URL("http://universities.hipolabs.com/search?country=Brazil");


            HttpURLConnection conexao = (HttpURLConnection) url.openConnection();


            conexao.setRequestMethod("GET");


            int respostaCodigo = conexao.getResponseCode();

            if (respostaCodigo == HttpURLConnection.HTTP_OK) {

                ObjectMapper objectMapper = new ObjectMapper();
                JsonNode rootNode = objectMapper.readTree(conexao.getInputStream());

                Iterator<JsonNode> elements = rootNode.elements();

                while (elements.hasNext()) {
                    JsonNode objUniversidade = elements.next();

                    String nome = objUniversidade.get("name").asText();

                    Iterator<JsonNode> webPagesIterator = objUniversidade.get("web_pages").elements();
                    String urlUniversidade = webPagesIterator.hasNext() ? webPagesIterator.next().asText() : "";

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

class Universidade2 {
    private String nome;
    private String url;

    public Universidade2(String nome, String url) {
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
