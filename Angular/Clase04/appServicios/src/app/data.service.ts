import { EventEmitter } from '@angular/core';

export class DataService {
  private nombre: string = "FullStack"

  onEnviarNuevoNombre: EventEmitter<string> = new EventEmitter<string>()

  cambiarNombre(nuevoNombre) {
    this.nombre = nuevoNombre
    this.onEnviarNuevoNombre.emit(this.nombre)
  }

  leerNombre() {
    return this.nombre
  }
}
