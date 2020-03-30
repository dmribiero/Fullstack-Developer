import { Injectable } from '@angular/core';
import { produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  prodItens:produto[] = [];
  itensTotal:number = 0;

  constructor() { }

  addProdutos(prod:any){  
    if(!this.prodItens.find(o => o === prod)){
      this.prodItens.push(prod);              
    }
  }
  
  removerProdutos(prod:any){
      let obj = this.prodItens.indexOf(prod);
      this.prodItens.splice(obj, 1);      
    
  }

  getProdutos(){    
    return this.prodItens;
  }

  getTotalPreco(qtd:any){     
    let total = 0;   

     this.prodItens.forEach(o =>{                  
      total = (o.precoUnitario * qtd);           
    });          
    return total;
  }

  clearCarrinho(){
    this.prodItens = [];
  }


  
}
