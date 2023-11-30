package com.villa.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.villa.demo.model.UserModel;
import com.villa.demo.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public UserModel save(UserModel userModel) {
        return this.userRepository.save(userModel);
    }

    public void save(String id, String nome, int idade, String email, String senha, String sexo, boolean sindico) {
        this.userRepository.save(new UserModel(id, nome, idade, email, senha, sexo, sindico));
    }

    public List<UserModel> findAll() {
        return (List<UserModel>) this.userRepository.findAll();
    }

    public List<UserModel> findByName(String nome) {
        return (List<UserModel>) this.userRepository.findByName(nome);
    }

    public UserModel findByEmail(String email) {
        return (UserModel) this.userRepository.findByEmail(email);
    }

    public List<UserModel> findByAgeAndName(int idade, String nome) {
        return (List<UserModel>) this.userRepository.findByAgeAndName(idade, nome);
    }

    public void delete(String id) {
        this.userRepository.deleteById(id);
    }

}