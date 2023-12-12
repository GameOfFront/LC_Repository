package dto;

import lombok.Data;

@Data
public class UsuarioDTOOutput {
    private int id;
    private String nome;
    // Atributo senha não será incluído nesta classe
}