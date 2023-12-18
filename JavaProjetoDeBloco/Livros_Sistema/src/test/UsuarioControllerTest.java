import java.util.Arrays;
import java.util.List;
import org.example.UsuarioController;
import org.example.Usuario;
import org.example.UsuarioRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

public class UsuarioControllerTest {
    @InjectMocks
    private UsuarioController usuarioController;
    @Mock
    private UsuarioRepository usuarioRepository;

    public UsuarioControllerTest() {
    }

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetAllUsuarios() {
        Usuario usuario1 = new Usuario("Usuário 1", "usuario1@example.com", "senha1");
        Usuario usuario2 = new Usuario("Usuário 2", "usuario2@example.com", "senha2");
        List<Usuario> usuarios = Arrays.asList(usuario1, usuario2);
        Mockito.when(this.usuarioRepository.findAll()).thenReturn(usuarios);
        List<Usuario> response = this.usuarioController.getAllUsuarios();
        Assert.assertEquals(usuarios, response);
    }
}
