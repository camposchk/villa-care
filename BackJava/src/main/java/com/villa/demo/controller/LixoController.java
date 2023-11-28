package com.villa.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.villa.demo.model.LixoModel;
import com.villa.demo.service.LixoService;

@RestController
@RequestMapping("/lixo")
public class LixoController {

    @Autowired
    private LixoService LixoService;

    @PostMapping("")
    public void newLixo(@RequestBody LixoModel newLixo)
    {
        LixoService.save(newLixo);
    }

    @GetMapping("")
    public List<LixoModel> getAll() 
    {
        List<LixoModel> all = this.LixoService.findAll();
        return all;
    }

    @DeleteMapping("/{id}")
    public void deleteLixo(@PathVariable String id) {
        LixoService.deleteById(id);
    }
}