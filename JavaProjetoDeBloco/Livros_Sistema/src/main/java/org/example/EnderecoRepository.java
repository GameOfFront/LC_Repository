package org.example;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface EnderecoRepository extends CrudRepository<Endereco, Long> {
    Optional<Endereco> findByCep(String cep);
    List<Endereco> findByCidade(String cidade);

}
