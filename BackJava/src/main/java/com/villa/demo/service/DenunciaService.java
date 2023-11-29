package com.villa.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.villa.demo.model.DenunciaModel;
import com.villa.demo.repository.DenunciaRepository;

@Service
public class DenunciaService {
    @Autowired
    private DenunciaRepository DenunciaRepository;

    public DenunciaModel save(DenunciaModel DenunciaModel)
    {
        return this.DenunciaRepository.save(DenunciaModel);
    }

    public void save(String id, String denuncia)
    {
        this.DenunciaRepository.save(new DenunciaModel(id, denuncia));
    }

    public List<DenunciaModel> findAll() 
    {
        List<DenunciaModel> entidades = this.DenunciaRepository.findAll();
        return entidades;
    }

    public void deleteById(String id) {
        this.DenunciaRepository.deleteById(id);
    }
}


