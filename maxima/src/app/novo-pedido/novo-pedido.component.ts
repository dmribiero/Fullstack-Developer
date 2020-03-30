import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { clientes } from '../models/clientes.model';
import { produto } from '../models/produto.model';
import { CarrinhoService } from '../services/carrinho.service';
import { ApiGatwayService } from '../services/api-gatway.service';
import { pedido } from '../models/pedido.model';


@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.css']
})
export class NovoPedidoComponent implements OnInit {
clienteFormControl = new FormControl();
produtosFormControl = new FormControl();

clientes:any;
produtos:any;
erro: any;
carrinho:produto[] = [];
qtdItemTotal:number = 0;
precoTotalProduto: number = 0;
precoTotal: number = 0;
precoFrete:number = 0;
pedido:pedido;
codigoPedido:string;
mensagem:string;
verificaCarrinho:boolean;

constructor(  
  private apiGatway:ApiGatwayService, 
  private carrinhoService:CarrinhoService,
  private cd: ChangeDetectorRef) { 
  this.getterClientes();
  this.getterProdutos(); 
    
};

  ngOnInit() {    
      this.gerarCodigoPedido();      
  }

  gerarCodigoPedido(){
    this.codigoPedido = String(Math.random() * (99999999 -1) -1 * 9).substring(0,8);      
  }

  getterClientes(){
    this.apiGatway.getClientes().subscribe( 
      (data: clientes) => {this.clientes = data;                      
    },
     
      (error: any) => {
        this.erro = error;
        console.error('Erro Listar Clientes', error);
      });     
  }

  addCarrinho(prod:produto){
    prod.qtd_itens = 1;
    //this.qtdItemTotal +=1;
    this.carrinhoService.addProdutos(prod);         
    this.carrinho = this.carrinhoService.getProdutos();
    this.calcularTotal();
    this.update();            
    
  }

  removeProdutos(prod:produto){
      this.precoTotalProduto -= prod.valorItens;
      this.carrinhoService.removerProdutos(prod);
      this.calcularTotal();                
  }

  getterProdutos(){
    this.apiGatway.getProdutos().subscribe( 
      (data: produto) => {this.produtos = data;              
    },
     
      (error: any) => {
        this.erro = error;
        console.error('Erro Listar Produtos', error);
      });      
  }

  atualizarPreco(prod:produto,qtd:number){
    prod.qtd_itens = 0;      
    prod.qtd_itens = qtd; 
    
    this.precoTotalProduto = 0;
    this.qtdItemTotal = 0;
             
   this.calcularTotal();
  
    this.update();  
  }
  
  calcularTotal(){
    this.precoTotalProduto = 0;
    this.carrinho.forEach(e =>{
    e.valorItens = e.qtd_itens * e.precoUnitario;      
    this.precoTotalProduto += e.valorItens;                
    });    
    this.calcularFrete();
    
  }

  calcularFrete(){
    this.precoFrete = 0;
    this.qtdItemTotal = 0;
    this.carrinho.forEach(e =>{            
    this.qtdItemTotal += Number(e.qtd_itens);
           
    });
    
    this.apiGatway.getFrete(this.qtdItemTotal).subscribe(
      (data: number) => {
        this.precoFrete += data;        
        this.precoTotal = this.precoFrete + this.precoTotalProduto;
      },
      (error: any) => {
        this.erro = error;   
      });             
  }
  

  finalizarPedido(){
    this.pedido = new pedido();
    this.pedido.codigo = this.codigoPedido;
    this.pedido.qtdItens = this.qtdItemTotal;
    this.pedido.valorFrete = this.precoFrete;
    this.pedido.valorTotal = this.precoTotal;
    
    this.apiGatway.setPedido(this.pedido).subscribe(
      () => {
      console.log("sucesso")
      this.gerarCodigoPedido();
      alert('Pedido de nº ' + this.codigoPedido + ' realizado com sucesso')
      this.mensagem = 'Pedido realizado com sucesso';
      this.clearCarrinho();
    },
      () => {
      console.log("erro")
      alert("Erro ao inserir o pedido");
      
      this.mensagem = 'Erro ao realizar pedido';}
    )
   
  }

  clearCarrinho(){
    this.carrinhoService.clearCarrinho();
    this.precoFrete = 0;
    this.precoTotal = 0;
    this.precoTotalProduto = 0;
    this.carrinho = [];
    
  }
  
  update(){
    this.cd.detectChanges();
  }

  carrinhoVazio(){
    if(this.carrinho.length === 0){
        return 1
    }else{
      return 0;
    }
  } 
 
}
