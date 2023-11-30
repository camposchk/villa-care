package com.villa.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.villa.demo.model.UserModel;
import com.villa.demo.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("")
    public List<UserModel> getAllUser() {
        List<UserModel> listRes = userService.findAll();
        return listRes;
    }

    @GetMapping("/{nome}")
    public List<UserModel> getUserByName(@PathVariable String nome) {
        List<UserModel> listRes = userService.findByName(nome);
        return listRes;
    }

    @GetMapping("/{idade}/{nome}")
    public List<UserModel> getUserByAgeAndName(@PathVariable int idade, @PathVariable String nome) {
        List<UserModel> listRes = userService.findByAgeAndName(idade, nome);
        return listRes;
    }

    @PostMapping("")
    public void newUser(@RequestBody UserModel newUser) {
        userService.save(newUser);
    }

    @PutMapping("/{id}")
    public void putUser(@RequestBody UserModel newUser, @PathVariable String id) {
        userService.save((String) id, (String) newUser.getNome(), (int) newUser.getIdade(), (String) newUser.getEmail(), (String) newUser.getSenha(), (String) newUser.getSexo(), (boolean) newUser.isSindico());
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        userService.delete(id);
    }

}
