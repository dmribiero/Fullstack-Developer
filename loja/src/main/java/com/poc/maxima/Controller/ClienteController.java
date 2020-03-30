package com.poc.maxima.Controller;

import com.poc.maxima.models.Cliente;
import com.poc.maxima.repository.ClienteRepository;
import com.poc.maxima.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/cliente")
public class ClienteController {

    @Autowired
    ClienteService clienteService = new ClienteService();

    @Autowired
    ClienteRepository clienteRepository;

    @GetMapping
    public void persistirClientes(){
        List<Cliente> lstClientes = clienteService.popularClientes();
        for (Cliente o : lstClientes) {
            clienteRepository.save(o);
        }
    }

    @GetMapping("/listarCliente")
    public List<Cliente> listarClientes(){
        List<Cliente> lstCliente =  clienteRepository.findAll();
        if(lstCliente.isEmpty()) {
            persistirClientes();
            return clienteRepository.findAll();
        }
        return lstCliente;
    }

}
