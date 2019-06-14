import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { canDeactivateFuncion } from './canDeactivateFuncion.interface';

@Injectable({
  providedIn: 'root'
})
export class SalirRutaGuard implements CanDeactivate<canDeactivateFuncion> {

  canDeactivate(componente: canDeactivateFuncion): boolean {
    if (componente.canDeactivateData()) {
      if (confirm("Hay data sin salvar, quieres salir?")) {
        return true
      }

      return false
    }

    return true
  }

}
