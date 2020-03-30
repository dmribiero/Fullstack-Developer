package com.poc.maxima.service;

import com.poc.maxima.Controller.bean.PopularDados;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class ProdutoService {

    @Autowired
    private RestTemplate restTemplate;

    public List popularProdutos(){
       PopularDados response = restTemplate.getForObject("https://api.myjson.com/bins/tnjfr", PopularDados.class);
       return response.getProdutos();
    }
}
