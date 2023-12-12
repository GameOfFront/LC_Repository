import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

import java.io.DataOutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class Q11 {

    public static void main(String[] args) {

        User user = new User(1, 1, "delectus aut autem", false);


        String jsonInputString = convertUserToJson(user);


        fazerRequisicao(jsonInputString);
    }

    public static String convertUserToJson(User user) {
        try {

            ObjectMapper objectMapper = new ObjectMapper();


            ObjectNode userNode = objectMapper.createObjectNode();
            userNode.put("userId", user.getUserId());
            userNode.put("id", user.getId());
            userNode.put("title", user.getTitle());
            userNode.put("completed", user.isCompleted());


            return objectMapper.writeValueAsString(userNode);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
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

class User {
    private int userId;
    private int id;
    private String title;
    private boolean completed;

    public User(int userId, int id, String title, boolean completed) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }

    public int getUserId() {
        return userId;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public boolean isCompleted() {
        return completed;
    }
}
