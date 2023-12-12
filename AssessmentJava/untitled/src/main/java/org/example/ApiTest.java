package org.example;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ApiTest {

    @Test
    public void testInsercaoUsuario() throws IOException {
        // Gerar dados aleatórios de usuário usando a API pública
        String randomUserApiUrl = "https://randomuser.me/api/";
        String userData = obterDadosAleatoriosUsuario(randomUserApiUrl);

        // URL da sua API de inserção de usuários
        String apiUrl = "http://localhost:3000/usuarios";

        // Crie uma instância da classe URL com a URL da sua API
        URL url = new URL(apiUrl);

        // Abra uma conexão HTTP
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();

        // Configure o método HTTP POST
        connection.setRequestMethod("POST");
        connection.setRequestProperty("Content-Type", "application/json");
        connection.setDoOutput(true);

        // Escreva os dados aleatórios de usuário na solicitação
        connection.getOutputStream().write(userData.getBytes());

        // Obtenha o código de resposta
        int responseCode = connection.getResponseCode();

        // Feche a conexão
        connection.disconnect();

        // Valide se o código de resposta é 201 (Created)
        assertEquals(201, responseCode, "A inserção do usuário falhou. Código de resposta: " + responseCode);
    }

    private String obterDadosAleatoriosUsuario(String apiUrl) throws IOException {
        // Crie uma instância da classe URL com a URL da API pública
        URL url = new URL(apiUrl);

        // Abra uma conexão HTTP
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();

        // Configure o método HTTP GET
        connection.setRequestMethod("GET");

        // Obtenha a resposta da API pública
        StringBuilder response = new StringBuilder();
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()))) {
            String line;
            while ((line = reader.readLine()) != null) {
                response.append(line);
            }
        }

        // Feche a conexão
        connection.disconnect();

        // Utilize o ObjectMapper para extrair os dados relevantes do usuário
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode rootNode = objectMapper.readTree(response.toString());
        JsonNode userNode = rootNode.path("results").path(0);

        // Retorne os dados do usuário como uma string JSON
        return userNode.toString();
    }
}
