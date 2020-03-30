import { Component, OnInit } from '@angular/core';
import { pedido } from '../models/pedido.model';
import { ApiGatwayService } from '../services/api-gatway.service';

@Component({
  selector: 'app-listar-pedidos',
  templateUrl: './listar-pedidos.component.html',
  styleUrls: ['./listar-pedidos.component.css']
})
export class ListarPedidosComponent implements OnInit {
  pedido:pedido;
  erro: any;
  constructor(private apiGatway: ApiGatwayService) {
    this.getter();
   }

  ngOnInit() {   
  }

  getter(){
    this.apiGatway.getPedidos().subscribe( 
      (data: pedido) => {this.pedido = data;       
    },
     
      (error: any) => {
        this.erro = error;
        console.error('Erro Listar Pedidos', error);
      });      
  }

}
