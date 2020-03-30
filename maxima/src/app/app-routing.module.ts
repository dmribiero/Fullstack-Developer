import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPedidosComponent } from './listar-pedidos/listar-pedidos.component';
import { NovoPedidoComponent } from './novo-pedido/novo-pedido.component';

const routes: Routes = [
  {path: 'listarPedidos', component: ListarPedidosComponent},
  {path: 'novoPedido', component: NovoPedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
