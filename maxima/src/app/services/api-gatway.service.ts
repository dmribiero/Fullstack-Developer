import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class ApiGatwayService {
  url:string = "http://localhost:5555";

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'content-Type' : 'application/josn'})
  }

  public getClientes():Observable<any>{
    return this.http.get(this.url + '/maxima/cliente/listarCliente');        
  }

  public getPedidos():Observable<any>{
    return this.http.get(this.url + '/maxima/pedido/listarPedidos');
  }

  public getProdutos():Observable<any>{
    return this.http.get(this.url + '/maxima/produto/listar');
  }

  public setPedido(ped:pedido):Observable<pedido>{
    return this.http.post<pedido>(this.url + '/maxima/pedido/fecharPedido',ped);
  }

  public getFrete(qtd:any):Observable<any>{    
    return this.http.get(this.url + '/frete/calcular/' + qtd);
  }
}
