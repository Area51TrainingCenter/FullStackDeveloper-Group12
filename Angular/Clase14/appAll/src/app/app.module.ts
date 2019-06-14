import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { SalirRutaGuard } from './salir-ruta.guard';

import { Routes, RouterModule } from "@angular/router"
import { ReactiveFormsModule } from "@angular/forms"
import { DatosResolve } from './datos.resolve';
import { ReducidorPipe } from './reducidor.pipe';
import { FiltrarPipe } from './filtrar.pipe';

const rutas: Routes = [
  {
    path: "", component: ListadoComponent, resolve: {
      lista: DatosResolve
    }
  },
  { path: "formulario", component: FormularioComponent, canDeactivate: [SalirRutaGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoComponent,
    ReducidorPipe,
    FiltrarPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    ReactiveFormsModule
  ],
  providers: [DatosResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
