import { CanActivate } from "@angular/router";
import { Inject } from '@angular/core';

@Inject({})
export class AutenticadoGuard implements CanActivate {

  canActivate(): boolean {
    return false
  }
}
