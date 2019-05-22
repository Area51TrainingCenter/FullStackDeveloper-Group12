import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ClienteComponent } from './cliente/cliente.component';
import { RouterModule, Route, Routes } from "@angular/router";
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component'

//const rutas: Route[] = []
const rutas: Routes = [
  { path: "", component: UsuarioComponent },
  { path: "clientes", component: ClienteComponent },
  //{ path: "**", component: NoEncontradoComponent }
  { path: "**", redirectTo: "" }
]

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ClienteComponent,
    NoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
