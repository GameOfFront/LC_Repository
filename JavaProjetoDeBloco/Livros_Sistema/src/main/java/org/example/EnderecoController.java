package org.example;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/enderecos")
public class EnderecoController {

    @Autowired
    private EnderecoRepository enderecoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping
    public List<Endereco> getAllEnderecos() {
        return (List<Endereco>) enderecoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Endereco getEnderecoById(@PathVariable Long id) {
        return enderecoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Endereço não encontrado com o ID: " + id));
    }

    @PostMapping("/usuario/{usuarioId}")
    public Endereco createEnderecoForUsuario(@PathVariable Long usuarioId, @RequestBody Endereco novoEndereco) {
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new ResourceNotFoundException("Usuário não encontrado com o ID: " + usuarioId));

        novoEndereco.setUsuario(usuario);

        if (usuario.getEnderecos() == null) {
            usuario.setEnderecos(new ArrayList<>());
        }
        usuario.getEnderecos().add(novoEndereco);

        usuarioRepository.save(usuario);

        return enderecoRepository.save(novoEndereco);
    }

    @PostMapping("/incluir")
    public Endereco incluirEndereco(@RequestBody Endereco novoEndereco) {
        return enderecoRepository.save(novoEndereco);
    }

    @DeleteMapping("/{id}")
    public void deleteEndereco(@PathVariable Long id) {
        enderecoRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public Endereco updateEndereco(@PathVariable Long id, @RequestBody Endereco novoEndereco) {
        return enderecoRepository.findById(id)
                .map(endereco -> {
                    endereco.setCep(novoEndereco.getCep());
                    endereco.setLogradouro(novoEndereco.getLogradouro());
                    endereco.setBairro(novoEndereco.getBairro());
                    endereco.setCidade(novoEndereco.getCidade());
                    endereco.setEstado(novoEndereco.getEstado());

                    return enderecoRepository.save(endereco);
                })
                .orElseThrow(() -> new ResourceNotFoundException("Endereço não encontrado com o ID: " + id));
    }

}
