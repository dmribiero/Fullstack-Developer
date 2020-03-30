package com.maxima.poc.frete.util;

public class Util {

    public static Float numeroAleatorio(float min, float max){
        float randomNum = 0;
        randomNum = min + (float)(Math.random() * (max - min));
        return Float.valueOf(randomNum);
    }
}

