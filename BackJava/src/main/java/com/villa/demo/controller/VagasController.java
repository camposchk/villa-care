package com.villa.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.villa.demo.model.VagasModel;
import com.villa.demo.service.VagasService;

@RestController
@RequestMapping("/vagas")
public class VagasController {

    @Autowired
    private VagasService VagasService;

    @PostMapping("")
    public void newVagas(@RequestBody VagasModel newVagas)
    {
        VagasService.save(newVagas);
    }

    @GetMapping("")
    public List<VagasModel> getAll() 
    {
        List<VagasModel> all = this.VagasService.findAll();
        return all;
    }
}