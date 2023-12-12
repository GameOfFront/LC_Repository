package controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import dto.UsuarioDTOInput;
import spark.Request;
import spark.Response;
import spark.Route;
import spark.Spark;
import service.UsuarioService;

import java.util.HashMap;
import java.util.Map;

public class UsuarioController {

    private UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    public void respostasRequisicoes() {
        // Endpoint para buscar um usuário pelo ID
        Spark.get("/usuarios/:id", (req, res) -> buscarUsuario(req, res));
    }

    private String buscarUsuario(Request req, Response res) {
        try {
            // Obter o ID a partir dos parâmetros da requisição
            int id = Integer.parseInt(req.params(":id"));

            // Utilizar o objeto da classe UsuarioService para buscar o usuário
            var usuario = usuarioService.buscar(id);

            // Verificar se o usuário foi encontrado
            if (usuario.isPresent()) {
                // Utilizar a biblioteca ObjectMapper para converter o usuário em JSON
                ObjectMapper objectMapper = new ObjectMapper();
                String jsonUsuario = objectMapper.writeValueAsString(usuario.get());

                // Definir o tipo de resposta como JSON e retornar o JSON
                res.type("application/json");
                return jsonUsuario;
            } else {
                // Se o usuário não foi encontrado, definir o código de resposta para 404 (Not Found)
                res.status(404);
                return "Usuário não encontrado";
            }
        } catch (NumberFormatException e) {
            // Se o ID não for um número válido, definir o código de resposta para 400 (Bad Request)
            res.status(400);
            return "ID inválido";
        } catch (Exception e) {
            // Em caso de outros erros, definir o código de resposta para 500 (Internal Server Error)
            res.status(500);
            return "Erro ao buscar usuário: " + e.getMessage();
        }
    }

    private String listarUsuarios(Request req, Response res) {
        try {
            // Obter a lista de usuários do serviço
            var listaUsuarios = usuarioService.listarUsuarios();

            // Utilizar a biblioteca ObjectMapper para converter a lista em JSON
            ObjectMapper objectMapper = new ObjectMapper();
            String jsonUsuarios = objectMapper.writeValueAsString(listaUsuarios);

            // Definir o tipo de resposta como JSON e retornar o JSON
            res.type("application/json");
            return jsonUsuarios;
        } catch (Exception e) {
            // Em caso de erro, definir o código de resposta para 500 (Internal Server Error)
            res.status(500);
            return "Erro ao listar usuários: " + e.getMessage();
        }
    }

    private String excluirUsuario(Request req, Response res) {
        try {
            // Obter o ID a partir dos parâmetros da requisição
            int id = Integer.parseInt(req.params(":id"));

            // Utilizar o objeto da classe UsuarioService para excluir o usuário
            usuarioService.excluir(id);

            // Definir o código de resposta para 204 (No Content) indicando sucesso sem conteúdo
            res.status(204);
            return "";
        } catch (NumberFormatException e) {
            // Se o ID não for um número válido, definir o código de resposta para 400 (Bad Request)
            res.status(400);
            return "ID inválido";
        } catch (Exception e) {
            // Em caso de outros erros, definir o código de resposta para 500 (Internal Server Error)
            res.status(500);
            return "Erro ao excluir usuário: " + e.getMessage();
        }
    }

    private String inserirUsuario(Request req, Response res) {
        try {
            // Utilizar a biblioteca ObjectMapper para converter o JSON do corpo da requisição para UsuarioDTOInput
            ObjectMapper objectMapper = new ObjectMapper();
            UsuarioDTOInput usuarioDTOInput = objectMapper.readValue(req.body(), UsuarioDTOInput.class);

            // Utilizar o objeto da classe UsuarioService para inserir o novo usuário
            usuarioService.inserirUsuario(usuarioDTOInput);

            // Definir o código de resposta para 201 (Created) indicando sucesso na criação
            res.status(201);
            return "Usuário inserido com sucesso";
        } catch (Exception e) {
            // Em caso de erros, definir o código de resposta para 500 (Internal Server Error)
            res.status(500);
            return "Erro ao inserir usuário: " + e.getMessage();
        }
    }

    private String atualizarUsuario(Request req, Response res) {
        try {
            // Utilizar a biblioteca ObjectMapper para converter o JSON do corpo da requisição para UsuarioDTOInput
            ObjectMapper objectMapper = new ObjectMapper();
            UsuarioDTOInput usuarioDTOInput = objectMapper.readValue(req.body(), UsuarioDTOInput.class);

            // Utilizar o objeto da classe UsuarioService para atualizar o usuário
            usuarioService.alterarUsuario(usuarioDTOInput);

            // Definir o código de resposta para 200 (OK) indicando sucesso na atualização
            res.status(200);
            return "Usuário atualizado com sucesso";
        } catch (Exception e) {
            // Em caso de erros, definir o código de resposta para 500 (Internal Server Error)
            res.status(500);
            return "Erro ao atualizar usuário: " + e.getMessage();
        }
    }

}