package org.example;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class LivroLoader {
    public static List<Livro> carregarLivros(String caminhoDoArquivo) {
        List<Livro> livros = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(new FileReader(caminhoDoArquivo))) {
            String linha;
            while ((linha = br.readLine()) != null) {

                Pattern pattern = Pattern.compile("(.+)\\((\\d{4})\\) - Autor: (.+);");
                Matcher matcher = pattern.matcher(linha);

                if (matcher.matches()) {
                    String nome = matcher.group(1).trim();
                    int ano = Integer.parseInt(matcher.group(2));
                    String autor = matcher.group(3).trim();

                    Livro livro = new Livro(nome, autor, ano);
                    livros.add(livro);
                } else {
                    System.out.println("Formato inválido na linha: " + linha);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return livros;
    }
}
