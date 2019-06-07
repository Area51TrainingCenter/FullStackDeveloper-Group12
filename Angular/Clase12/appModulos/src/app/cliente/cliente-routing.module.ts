import { ListadoClienteComponent } from './listado-cliente/listado-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const rutas: Routes = [
  { path: "cliente", component: ListadoClienteComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(rutas)]
})
export class ClienteRoutingModule { }
