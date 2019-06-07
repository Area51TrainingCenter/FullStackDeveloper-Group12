import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoUsuarioComponent } from './listado-usuario/listado-usuario.component';

const rutas: Routes = [
  { path: "", component: ListadoUsuarioComponent }
]

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
