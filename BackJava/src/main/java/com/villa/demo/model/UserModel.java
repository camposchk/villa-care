package com.villa.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("user")
public class UserModel {
    @Id
    private String id;
    private String nome;
    private int idade;
    private String email;
    private String sexo;
    private String senha;
    private boolean sindico;  
}
