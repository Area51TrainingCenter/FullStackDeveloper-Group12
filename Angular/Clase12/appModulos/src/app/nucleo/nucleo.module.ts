import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { NucleoRoutingModule } from './nucleo-routing.module';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { UsuarioModule } from '../usuario/usuario.module';

@NgModule({
  declarations: [LoginComponent, HomeComponent, RegistroComponent, CabeceraComponent],
  imports: [
    CommonModule,
    NucleoRoutingModule
  ],
  exports: [NucleoRoutingModule, CabeceraComponent]
})
export class NucleoModule { }
