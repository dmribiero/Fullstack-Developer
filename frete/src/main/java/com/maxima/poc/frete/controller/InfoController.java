package com.maxima.poc.frete.controller;
import com.maxima.poc.frete.service.InfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/calcular")
public class InfoController {

    @Autowired
    private InfoService infoService;

    @RequestMapping("/{qtdItens}")
    public Float getInfoFrete(@PathVariable Integer qtdItens) {
        return infoService.getInfoCep(qtdItens);
    }
}
