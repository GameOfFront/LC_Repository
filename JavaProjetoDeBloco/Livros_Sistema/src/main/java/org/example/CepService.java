package org.example;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class CepService {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private EnderecoRepository enderecoRepository;

    public Endereco buscarEnderecoPorCep(String cep) {
        String url = "https://viacep.com.br/ws/" + cep + "/json";
        ViaCepResponse viaCepResponse = restTemplate.getForObject(url, ViaCepResponse.class);

        Endereco endereco = new Endereco();
        endereco.setCep(viaCepResponse.getCep());
        endereco.setLogradouro(viaCepResponse.getLogradouro());
        endereco.setBairro(viaCepResponse.getBairro());
        endereco.setCidade(viaCepResponse.getLocalidade());
        endereco.setEstado(viaCepResponse.getUf());

        enderecoRepository.save(endereco);

        return endereco;
    }
}
