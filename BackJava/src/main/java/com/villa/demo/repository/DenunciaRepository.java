package com.villa.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.villa.demo.model.DenunciaModel;

public interface DenunciaRepository extends MongoRepository<DenunciaModel, String> {
    
}
