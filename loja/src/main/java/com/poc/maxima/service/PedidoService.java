package com.poc.maxima.service;

import com.poc.maxima.models.Pedido;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PedidoService {

    @Autowired
    private RestTemplate restTemplate;

    public Float calcularFrete(Pedido pedido){
        ResponseEntity<Float> respostaInfoClient = restTemplate.exchange("http://frete/calcular/" + pedido.getQtdItens(),
                HttpMethod.GET, null, Float.class);
       return respostaInfoClient.getBody();

    }
}
