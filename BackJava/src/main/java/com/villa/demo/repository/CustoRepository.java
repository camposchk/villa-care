package com.villa.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.villa.demo.model.CustoModel;

public interface CustoRepository extends MongoRepository<CustoModel, String> {
    
}
