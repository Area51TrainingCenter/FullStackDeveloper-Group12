import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { EdicionUsuarioComponent } from './edicion-usuario/edicion-usuario.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';
import { EdicionClienteComponent } from './edicion-cliente/edicion-cliente.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from "@angular/router"
import { AutenticadoGuard } from './autenticado.guard';
import { AutorizacionGuard } from './autorizacion.guard';

const rutas: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "usuario", component: ListadoUsuariosComponent, canActivateChild: [AutorizacionGuard], children: [
      //{ path: "", component: ListadoUsuariosComponent },
      { path: "nuevo", component: NuevoUsuarioComponent },
      { path: "edicion/:id", component: EdicionUsuarioComponent }
    ]
  },
  {
    path: "cliente", canActivateChild: [AutorizacionGuard], children: [
      { path: "", component: ListadoClientesComponent, },
      { path: "nuevo", component: NuevoClienteComponent },
      { path: "edicion/:id", component: EdicionClienteComponent }
    ]
  },
  { path: "**", redirectTo: "" }
]

@NgModule({
  declarations: [
    AppComponent,
    ListadoUsuariosComponent,
    NuevoUsuarioComponent,
    EdicionUsuarioComponent,
    ListadoClientesComponent,
    NuevoClienteComponent,
    EdicionClienteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [AutenticadoGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
