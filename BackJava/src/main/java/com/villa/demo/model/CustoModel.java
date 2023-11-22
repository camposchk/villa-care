package com.villa.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("custo")
public class CustoModel {
    @Id
    private String id;
    private float agua;
    private float funcionarios;
    private float fundos;
    private float extras;

}