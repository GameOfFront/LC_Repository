package org.example;
import jakarta.persistence.*;

@Entity
@Table(name = "Livros")
public class Livro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_livro")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_user", nullable = false)
    private Usuario usuario;

    @Column(name = "nome_livro")
    private String nome;

    @Column(name = "nota_livro")
    private float notaLivro;

    @Column(name = "recomendacao_livro")
    private String recomendacaoLivro;

    // New fields added from Filme class
    @ManyToOne
    @JoinColumn(name = "id_endereco")
    private Endereco endereco;

    @Column(name = "cep_livro")
    private String cep;

    public Livro() {
    }

    public Livro(Usuario usuario, String nome, float nota, String recomendacao) {
        this.usuario = usuario;
        this.nome = nome;
        this.notaLivro = nota;
        this.recomendacaoLivro = recomendacao;
    }

    public Long getId() {

        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public Usuario getUsuario() {

        return usuario;
    }

    public void setUsuario(Usuario usuario) {

        this.usuario = usuario;
    }

    public String getNomeLivro() {

        return nome;
    }

    public void setNomeLivro(String nomeLivro) {

        this.nome = nomeLivro;
    }

    public float getNotaLivro() {

        return notaLivro;
    }

    public void setNotaLivro(float notaLivro) {

        this.notaLivro = notaLivro;
    }

    public String getRecomendacaoLivro() {
        return recomendacaoLivro;
    }

    public void setRecomendacaoLivro(String recomendacaoLivro) {

        this.recomendacaoLivro = recomendacaoLivro;
    }

    public Endereco getEndereco() {

        return endereco;
    }

    public void setEndereco(Endereco endereco) {

        this.endereco = endereco;
    }

    public String getCepLivro() {
        return cep;
    }

    public void setCepLivro(String cep) {

        this.cep = cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }
}
