package com.villa.demo.model;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("vagas")
public class VagasModel {
    @Id
    private String id;
    private LocalDate diaReserva;
    private int vaga;
    private String moradorId;  
}

