package org.example;
import jakarta.persistence.*;

@Entity
@Table(name = "Endereco")
public class Endereco {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_endereco")
    private Long id;

    @Column(name = "estado")
    private String estado;

    @Column(name = "cidade")
    private String cidade;

    @Column(name = "bairro")
    private String bairro;

    @Column(name = "logradouro")
    private String logradouro;

    @Column(name = "cep")
    private String cep;


    public Endereco() {
    }

    public Endereco(String estado, String cidade, String bairro, String logradouro, String cep) {
        this.estado = estado;
        this.cidade = cidade;
        this.bairro = bairro;
        this.logradouro = logradouro;
        this.cep = cep;
    }


    public Long getId() {

        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }


    public String getEstado() {

        return estado;
    }

    public void setEstado(String estado) {

        this.estado = estado;
    }

    public String getBairro() {

        return bairro;
    }

    public void setBairro(String bairro) {

        this.bairro = bairro;
    }

    public String getCidade() {

        return cidade;
    }

    public void setCidade(String cidade) {

        this.cidade = cidade;
    }

    public String getLogradouro() {

        return logradouro;
    }

    public void setLogradouro(String logradouro) {

        this.logradouro = logradouro;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {

        this.cep = cep;
    }

    @ManyToOne
    @JoinColumn(name = "id_user")
    private Usuario usuario;

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

}
