package com.villa.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.villa.demo.model.AssembleiaModel;

public interface AssembleiaRepository extends MongoRepository<AssembleiaModel, String> {
    
}
