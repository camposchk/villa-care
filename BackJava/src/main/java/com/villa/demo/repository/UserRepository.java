package com.villa.demo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.villa.demo.model.UserModel;

public interface UserRepository extends MongoRepository<UserModel, String>{
    @Query("{'nome': ?0}")
    List<UserModel> findByName(String nome);

    @Query("{'email': ?0}")
    UserModel findByEmail(String email);

    @Query("{'nome': ?1, 'idade': ?0}")
    List<UserModel> findByAgeAndName(int idade, String nome);
} 
