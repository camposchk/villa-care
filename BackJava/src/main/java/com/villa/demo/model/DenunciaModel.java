package com.villa.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("denuncia")
public class DenunciaModel {
    @Id
    private String id;
    private String denuncia;  
}