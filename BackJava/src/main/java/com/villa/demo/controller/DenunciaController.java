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

import com.villa.demo.model.DenunciaModel;
import com.villa.demo.service.DenunciaService;

@RestController
@RequestMapping("/denuncia")
public class DenunciaController {

    @Autowired
    private DenunciaService DenunciaService;

    @PostMapping("")
    public void newDenuncia(@RequestBody DenunciaModel newDenuncia)
    {
        DenunciaService.save(newDenuncia);
    }

    @GetMapping("")
    public List<DenunciaModel> getAll() 
    {
        List<DenunciaModel> all = this.DenunciaService.findAll();
        return all;
    }

    @DeleteMapping("/{id}")
    public void deleteDenuncia(@PathVariable String id) {
        DenunciaService.deleteById(id);
    }
}