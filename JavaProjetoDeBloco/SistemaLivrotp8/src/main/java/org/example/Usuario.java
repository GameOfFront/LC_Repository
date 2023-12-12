package org.example;

import java.util.List;
import java.util.ArrayList;

public class Usuario {
    private String nome;
    private List<Livro> livros;

    public Usuario(String nome) {
        this.nome = nome;
        this.livros = new ArrayList<>();
    }

    public String getNome() {
        return nome;
    }

    public List<Livro> getLivros() {
        return livros;
    }
}
