package org.example;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping
    public List<Usuario> getAllUsuarios() {
        return (List<Usuario>) usuarioRepository.findAll();
    }

    @GetMapping("/{id}/livros")
    public List<Livro> getLivrosByUsuarioId(@PathVariable Long id) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Usuário não encontrado com o ID: " + id));

        return usuario.getLivros();
    }

    @PostMapping("/incluir")
    public Usuario incluirUsuario(@RequestBody Usuario novoUsuario) {
        return usuarioRepository.save(novoUsuario);
    }

    @DeleteMapping("/{id}")
    public void deleteUsuario(@PathVariable Long id) {
        usuarioRepository.deleteById(id);
    }

    @PostMapping
    public Usuario createUsuario(@RequestBody Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @PutMapping("/{id}")
    public Usuario updateUsuario(@PathVariable Long id, @RequestBody Usuario novoUsuario) {
        return usuarioRepository.findById(id)
                .map(usuario -> {
                    usuario.setNome(novoUsuario.getNome());
                    return usuarioRepository.save(usuario);
                })
                .orElseThrow(() -> new ResourceNotFoundException("Usuário não encontrado com o ID: " + id));
    }

}
