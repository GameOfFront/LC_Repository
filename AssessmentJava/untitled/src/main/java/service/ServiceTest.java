package service;

import dto.UsuarioDTOInput;
import org.testng.annotations.Test;
import service.UsuarioService;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ServiceTest {

    @Test
    public void testInsercaoUsuario() {
        // Crie uma instância da classe UsuarioService
        UsuarioService usuarioService = new UsuarioService();

        // Crie um objeto UsuarioDTOInput para inserção
        UsuarioDTOInput usuarioDTOInput = new UsuarioDTOInput();
        usuarioDTOInput.setNome("Exemplo");
        usuarioDTOInput.setSenha("Senha123");

        // Execute o método inserir da classe UsuarioService
        usuarioService.inserirUsuario(usuarioDTOInput);

        // Execute o método listar da classe UsuarioService
        var listaUsuarios = usuarioService.listarUsuarios();

        // Valide se o tamanho da lista retornada é igual a 1
        assertEquals(1, listaUsuarios.size(), "A inserção do usuário falhou");
    }
}