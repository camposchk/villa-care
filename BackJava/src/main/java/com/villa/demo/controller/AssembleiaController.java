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

import com.villa.demo.model.AssembleiaModel;
import com.villa.demo.service.AssembleiaService;

@RestController
@RequestMapping("/assembleia")
public class AssembleiaController {

    @Autowired
    private AssembleiaService AssembleiaService;

    @PostMapping("")
    public void newAssembleia(@RequestBody AssembleiaModel newAssembleia)
    {
        AssembleiaService.save(newAssembleia);
    }

    @GetMapping("")
    public List<AssembleiaModel> getAll() 
    {
        List<AssembleiaModel> all = this.AssembleiaService.findAll();
        return all;
    }

    @DeleteMapping("/{id}")
    public void deleteAssembleia(@PathVariable String id) {
        AssembleiaService.deleteById(id);
    }
}