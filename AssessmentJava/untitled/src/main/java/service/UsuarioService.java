package service;

import dto.UsuarioDTOOutput;
import org.modelmapper.ModelMapper;
import dto.UsuarioDTOInput;
import model.Usuario;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class UsuarioService {

    private List<Usuario> listaUsuarios;
    private ModelMapper modelMapper;

    public UsuarioService() {
        this.listaUsuarios = new ArrayList<>();
        this.modelMapper = new ModelMapper();
    }

    // Outros métodos existentes...

    public Optional<Usuario> buscarUsuarioPorId(int id) {
        return listaUsuarios.stream()
                .filter(usuario -> usuario.getId() == id)
                .findFirst();
    }

    public List<UsuarioDTOOutput> listarUsuarios() {
        return listaUsuarios.stream()
                .map(usuario -> modelMapper.map(usuario, UsuarioDTOOutput.class))
                .collect(Collectors.toList());
    }

    public void alterarUsuario(UsuarioDTOInput usuarioDTOInput) {
        int id = usuarioDTOInput.getId();

        // Verificar se o usuário com o ID fornecido já existe
        Optional<Usuario> usuarioExistente = buscarUsuarioPorId(id);

        if (usuarioExistente.isPresent()) {
            // Convertendo UsuarioDTOInput para Usuario usando o ModelMapper
            Usuario usuarioAtualizado = modelMapper.map(usuarioDTOInput, Usuario.class);

            // Substituir o objeto existente na listaUsuarios pelo objeto atualizado
            listaUsuarios.replaceAll(usuario -> usuario.getId() == id ? usuarioAtualizado : usuario);
        }
    }
    public void inserirUsuario(UsuarioDTOInput usuarioDTOInput) {
        // Convertendo UsuarioDTOInput para Usuario usando o ModelMapper
        Usuario usuario = modelMapper.map(usuarioDTOInput, Usuario.class);

        // Adicionando o Usuario convertido à listaUsuarios
        listaUsuarios.add(usuario);
    }

    public Optional<UsuarioDTOOutput> buscar(int id) {
        // Buscar o usuário com o ID fornecido na listaUsuarios
        Optional<Usuario> usuarioEncontrado = buscarUsuarioPorId(id);

        // Se o usuário for encontrado, converter para UsuarioDTOOutput usando o ModelMapper
        return usuarioEncontrado.map(usuario -> modelMapper.map(usuario, UsuarioDTOOutput.class));
    }

    public void excluir(int id) {
        Iterator<Usuario> iterator = listaUsuarios.iterator();
        while (iterator.hasNext()) {
            Usuario usuario = iterator.next();
            if (usuario.getId() == id) {
                iterator.remove(); // Remover o usuário encontrado
                break; // Parar após a remoção, se desejar
            }
        }
    }



    // Outros métodos existentes...

}