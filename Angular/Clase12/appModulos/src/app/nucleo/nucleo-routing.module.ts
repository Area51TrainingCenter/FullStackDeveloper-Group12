import { LoginComponent } from './login/login.component';
import { UsuarioModule } from '../usuario/usuario.module';
import { ClienteModule } from '../cliente/cliente.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from "@angular/router"
import { TransportistaModule } from '../transportista/transportista.module';

const rutas: Routes = [
  { path: "", component: LoginComponent },
  { path: "usuario", loadChildren: "../usuario/usuario.module#UsuarioModule" },
  { path: "**", redirectTo: "" }
]

@NgModule({
  imports: [RouterModule.forRoot(rutas, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class NucleoRoutingModule { }
