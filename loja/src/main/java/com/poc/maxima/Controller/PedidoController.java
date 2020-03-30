package com.poc.maxima.Controller;

import com.poc.maxima.models.Pedido;
import com.poc.maxima.repository.PedidoRepository;
import com.poc.maxima.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/pedido")
public class PedidoController {

    @Autowired
    PedidoService pedidoService = new PedidoService();

    @Autowired
    PedidoRepository pedidoRepository;

    @PostMapping("/calcularFrete")
    public Float frete(@RequestBody Pedido pedido) {
        return pedidoService.calcularFrete(pedido);
    }

    @PostMapping("/fecharPedido")
    public void salvarPedido(@RequestBody Pedido pedido){
        pedidoRepository.save(pedido);
    }


    @GetMapping("/listarPedidos")
    public List<Pedido> listarPedidos(){
        return pedidoRepository.findAll();
    }
}
