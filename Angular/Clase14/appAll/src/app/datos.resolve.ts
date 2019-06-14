import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class DatosResolve implements Resolve<any> {

  //constructor(private usuariosService: UsuarioService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const promesa = new Promise((resolve, reject) => {

      /*       this.usuariosService.listar()
              .subscribe(
                resultados => resolve(resultados)
              ) */

      setTimeout(() => {
        resolve([
          { usuario: "usuario1" },
          { usuario: "usuario2" },
          { usuario: "usuario3" }
        ])
      }, 3000)
    })

    return promesa
  }
}
