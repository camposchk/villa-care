package com.villa.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.villa.demo.model.VagasModel;

public interface VagasRepository extends MongoRepository<VagasModel, String> {
    
}
