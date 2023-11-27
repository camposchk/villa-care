package com.villa.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.villa.demo.model.ChurrasqueiraModel;

public interface ChurrasqueiraRepository extends MongoRepository<ChurrasqueiraModel, String> {
    
}
