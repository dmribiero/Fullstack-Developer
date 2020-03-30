package com.poc.maxima.Controller;

import com.poc.maxima.models.Produto;
import com.poc.maxima.repository.ProdutoRepository;
import com.poc.maxima.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/produto")
public class ProdutoController {

    @Autowired
    ProdutoService produtoService = new ProdutoService();

    @Autowired
    ProdutoRepository produtoRepository;

    @RequestMapping(method = RequestMethod.GET)
    public void persistirProdutos(){
        List<Produto> lstProdutos = produtoService.popularProdutos();
        for (Produto o : lstProdutos) {
            produtoRepository.save(o);
        }
    }

    @GetMapping("/listar")
    public List<Produto> listAll(){
        List<Produto> lstProdutos = produtoRepository.findAll();
        if(lstProdutos.isEmpty()){
            persistirProdutos();
            return produtoRepository.findAll();
        }
        return lstProdutos;
    }

}
