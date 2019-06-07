import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoUsuarioComponent } from './listado-usuario/listado-usuario.component';
import { UsuarioRoutingModule } from './usuario-routing.module';

@NgModule({
  declarations: [ListadoUsuarioComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ],
  exports: [UsuarioRoutingModule]
})
export class UsuarioModule { }
