import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoClienteComponent } from './listado-cliente/listado-cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';

@NgModule({
  declarations: [ListadoClienteComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
