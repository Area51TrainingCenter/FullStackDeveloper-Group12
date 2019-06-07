import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoTransportistaComponent } from './listado-transportista/listado-transportista.component';

const rutas: Routes = [
  { path: "transportista", component: ListadoTransportistaComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(rutas)]
})
export class TransportistaRoutingModule { }
