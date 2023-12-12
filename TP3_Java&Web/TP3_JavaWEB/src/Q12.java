import org.junit.Test;

import java.net.HttpURLConnection;

import static org.junit.Assert.assertEquals;

public class Q12 {

    @Test
    public void testeRequisicaoComSucesso() {

        int respostaCodigo = obterCodigoRespostaRequisicao();


        assertEquals(HttpURLConnection.HTTP_CREATED, respostaCodigo);
    }

    private int obterCodigoRespostaRequisicao() {
        try {

            User user = new User(1, 1, "delectus aut autem", false);


            String jsonInputString = Q11.convertUserToJson(user);


            Q11.fazerRequisicao(jsonInputString);


            return HttpURLConnection.HTTP_CREATED;
        } catch (Exception e) {
            e.printStackTrace();
            return -1;
        }
    }
}