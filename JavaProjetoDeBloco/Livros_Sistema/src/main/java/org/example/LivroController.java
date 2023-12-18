package org.example;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/livros")
public class LivroController {

    @Autowired
    private LivroRepository livroRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping
    public List<Livro> getAllLivros() {
        return (List<Livro>) livroRepository.findAll();
    }

    @GetMapping("/{id}")
    public Livro getLivroById(@PathVariable Long id) {
        return livroRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Livro não encontrado com o ID: " + id));
    }

    @PostMapping("/incluir")
    public Livro incluirLivro(@RequestBody Livro novoLivro) {
        return livroRepository.save(novoLivro);
    }

    @DeleteMapping("/{id}")
    public void deleteLivro(@PathVariable Long id) {
        livroRepository.deleteById(id);
    }

    @PostMapping("/usuario/{usuarioId}")
    public Livro createLivroForUsuario(@PathVariable Long usuarioId, @RequestBody Livro novoLivro) {
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new ResourceNotFoundException("Usuário não encontrado com o ID: " + usuarioId));

        novoLivro.setUsuario(usuario);
        return livroRepository.save(novoLivro);
    }

    @PutMapping("/{id}")
    public Livro updateLivro(@PathVariable Long id, @RequestBody Livro novoLivro) {
        return livroRepository.findById(id)
                .map(livro -> {
                    livro.setNomeLivro(novoLivro.getNomeLivro());
                    livro.setNotaLivro(novoLivro.getNotaLivro());
                    livro.setRecomendacaoLivro(novoLivro.getRecomendacaoLivro());

                    // Set additional fields if there are any

                    return livroRepository.save(livro);
                })
                .orElseThrow(() -> new ResourceNotFoundException("Livro não encontrado com o ID: " + id));
    }

}
