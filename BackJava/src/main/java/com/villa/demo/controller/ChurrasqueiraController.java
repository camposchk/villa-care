package com.villa.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.villa.demo.model.ChurrasqueiraModel;
import com.villa.demo.service.ChurrasqueiraService;

@RestController
@RequestMapping("/churrasqueira")
public class ChurrasqueiraController {

    @Autowired
    private ChurrasqueiraService churrasqueiraService;

    @PostMapping("")
    public void newChurrasqueira(@RequestBody ChurrasqueiraModel newChurrasqueira)
    {
        churrasqueiraService.save(newChurrasqueira);
    }

    @GetMapping("")
    public List<ChurrasqueiraModel> getAll() 
    {
        List<ChurrasqueiraModel> all = this.churrasqueiraService.findAll();
        return all;
    }
}