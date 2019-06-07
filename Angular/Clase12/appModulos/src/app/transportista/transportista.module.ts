import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoTransportistaComponent } from './listado-transportista/listado-transportista.component';
import { TransportistaRoutingModule } from './transportista-routing.module';

@NgModule({
  declarations: [ListadoTransportistaComponent],
  imports: [
    CommonModule,
    TransportistaRoutingModule
  ]
})
export class TransportistaModule { }
