package com.poc.maxima.Controller.bean;

import com.poc.maxima.models.Cliente;
import com.poc.maxima.models.Produto;

import java.util.List;

public class PopularDados {
    List<Cliente> clientes;
    List<Produto> produtos;

    public List<Cliente> getClientes() {
        return clientes;
    }

    public void setClientes(List<Cliente> clientes) {
        this.clientes = clientes;
    }

    public List<Produto> getProdutos() {
        return produtos;
    }

    public void setProdutos(List<Produto> produtos) {
        this.produtos = produtos;
    }
}
