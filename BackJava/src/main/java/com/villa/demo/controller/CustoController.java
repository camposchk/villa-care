package com.villa.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.villa.demo.model.CustoModel;
import com.villa.demo.service.CustoService;

@RestController
@RequestMapping("/custo")
public class CustoController {

    @Autowired
    private CustoService custoService;

    @PostMapping("")
    public void newCusto(@RequestBody CustoModel newCusto)
    {
        custoService.save(newCusto);
    }

    @GetMapping("")
    public CustoModel getLast() 
    {
        CustoModel last = this.custoService.findLast();
        return last;
    }
}