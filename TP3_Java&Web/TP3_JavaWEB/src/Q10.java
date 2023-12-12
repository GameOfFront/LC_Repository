import java.io.DataOutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class Q10 {

    public static void main(String[] args) {

        String jsonInputString = "{ \"userId\": " + 1 + ", \"id\": " + 1 + ", \"title\": \"delectus aut autem\", \"completed\": " + false + " }";


        fazerRequisicao(jsonInputString);
    }

    public static void fazerRequisicao(String jsonInputString) {
        try {

            URL url = new URL("https://jsonplaceholder.typicode.com/posts");


            HttpURLConnection conexao = (HttpURLConnection) url.openConnection();


            conexao.setRequestMethod("POST");
            conexao.setRequestProperty("Content-Type", "application/json");
            conexao.setDoOutput(true);


            try (DataOutputStream wr = new DataOutputStream(conexao.getOutputStream())) {
                byte[] input = jsonInputString.getBytes("UTF-8");
                wr.write(input, 0, input.length);
            }


            int respostaCodigo = conexao.getResponseCode();

            if (respostaCodigo == HttpURLConnection.HTTP_CREATED) {

                System.out.println("Requisição POST bem-sucedida. Código de resposta: " + respostaCodigo);
            } else {
                System.out.println("Falha na requisição. Código de resposta: " + respostaCodigo);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
