package org.example;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsuarioRepository extends CrudRepository<Usuario, Long> {
    List<Usuario> findByNome(String nome);
    List<Usuario> findByEmail(String email);
    Usuario findByEmailAndSenha(String email, String senha);
}
