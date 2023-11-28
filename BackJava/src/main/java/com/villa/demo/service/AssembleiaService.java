package com.villa.demo.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.villa.demo.model.AssembleiaModel;
import com.villa.demo.repository.AssembleiaRepository;

@Service
public class AssembleiaService {
    @Autowired
    private AssembleiaRepository AssembleiaRepository;

    public AssembleiaModel save(AssembleiaModel AssembleiaModel)
    {
        return this.AssembleiaRepository.save(AssembleiaModel);
    }

    public void save(String id, LocalDate diaReserva, String moradorId)
    {
        this.AssembleiaRepository.save(new AssembleiaModel(id, diaReserva, moradorId));
    }

    public List<AssembleiaModel> findAll() 
    {
        List<AssembleiaModel> entidades = this.AssembleiaRepository.findAll();
        return entidades;
    }

    public void deleteById(String id) {
        this.AssembleiaRepository.deleteById(id);
    }
}

