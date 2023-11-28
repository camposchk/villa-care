package com.villa.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.villa.demo.model.LixoModel;

public interface LixoRepository extends MongoRepository<LixoModel, String> {
    
}
