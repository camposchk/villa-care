package com.villa.demo.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.villa.demo.model.ChurrasqueiraModel;
import com.villa.demo.repository.ChurrasqueiraRepository;

@Service
public class ChurrasqueiraService {
    @Autowired
    private ChurrasqueiraRepository churrasqueiraRepository;

    public ChurrasqueiraModel save(ChurrasqueiraModel ChurrasqueiraModel)
    {
        return this.churrasqueiraRepository.save(ChurrasqueiraModel);
    }

    public void save(String id, LocalDate diaReserva, String moradorId)
    {
        this.churrasqueiraRepository.save(new ChurrasqueiraModel(id, diaReserva, moradorId));
    }

    public List<ChurrasqueiraModel> findAll() 
    {
        List<ChurrasqueiraModel> entidades = this.churrasqueiraRepository.findAll();
        return entidades;
    }
}

