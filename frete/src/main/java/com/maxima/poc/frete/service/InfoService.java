package com.maxima.poc.frete.service;
import com.maxima.poc.frete.util.Util;
import org.springframework.stereotype.Service;

@Service
public class InfoService {

    public Float getInfoCep(Integer qtdItens){
        return Float.valueOf(qtdItens * Util.numeroAleatorio(5,10));
    }

}
