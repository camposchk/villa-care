package com.villa.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.villa.demo.model.CustoModel;
import com.villa.demo.repository.CustoRepository;

@Service
public class CustoService {
    @Autowired
    private CustoRepository custoRepository;

    public CustoModel save(CustoModel custoModel)
    {
        return this.custoRepository.save(custoModel);
    }

    public void save(String id, float agua, float funcionarios, float fundos, float extras)
    {
        this.custoRepository.save(new CustoModel(id, agua, funcionarios, fundos, extras));
    }
}
