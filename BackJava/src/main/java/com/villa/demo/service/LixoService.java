package com.villa.demo.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.villa.demo.model.LixoModel;
import com.villa.demo.repository.LixoRepository;

@Service
public class LixoService {
    @Autowired
    private LixoRepository LixoRepository;

    public LixoModel save(LixoModel LixoModel)
    {
        return this.LixoRepository.save(LixoModel);
    }

    public void save(String id, LocalDate diaReserva, String moradorId)
    {
        this.LixoRepository.save(new LixoModel(id, diaReserva, moradorId));
    }

    public List<LixoModel> findAll() 
    {
        List<LixoModel> entidades = this.LixoRepository.findAll();
        return entidades;
    }

    public void deleteById(String id) {
        this.LixoRepository.deleteById(id);
    }
}

