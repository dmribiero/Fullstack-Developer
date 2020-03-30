package com.poc.maxima.service;

import com.google.gson.Gson;
import com.poc.maxima.Controller.bean.PopularDados;
import com.poc.maxima.models.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.lang.reflect.Type;
import java.util.List;

@Service
public class ClienteService {

    @Autowired
    private RestTemplate restTemplate;

    public List popularClientes(){
       PopularDados response = restTemplate.getForObject("https://api.myjson.com/bins/tnjfr", PopularDados.class);
       return response.getClientes();
    }
}
