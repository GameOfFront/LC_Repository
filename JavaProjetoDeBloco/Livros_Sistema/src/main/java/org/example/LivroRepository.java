package org.example;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface LivroRepository extends CrudRepository<Livro, Long> {
    List<Livro> findByUsuario(Usuario usuario);
    List<Livro> findByNotaLivroGreaterThan(float nota);

}
