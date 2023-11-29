package com.villa.demo.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.villa.demo.model.VagasModel;
import com.villa.demo.repository.VagasRepository;

@Service
public class VagasService {
    @Autowired
    private VagasRepository VagasRepository;

    public VagasModel save(VagasModel VagasModel)
    {
        return this.VagasRepository.save(VagasModel);
    }

    public void save(String id, LocalDate diaReserva, int vaga, String moradorId)
    {
        this.VagasRepository.save(new VagasModel(id, diaReserva, vaga, moradorId));
    }

    public List<VagasModel> findAll() 
    {
        List<VagasModel> entidades = this.VagasRepository.findAll();
        return entidades;
    }
}

