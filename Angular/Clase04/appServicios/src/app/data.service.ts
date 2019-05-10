import { LogService } from './log.service';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class DataService {
  private nombre: string = "FullStack"

  onEnviarNuevoNombre: EventEmitter<string> = new EventEmitter<string>()

  constructor(private log: LogService) { }

  cambiarNombre(nuevoNombre) {
    this.nombre = nuevoNombre
    this.onEnviarNuevoNombre.emit(this.nombre)
    this.log.escribir("Se cambió el nombre")
  }

  leerNombre() {
    this.log.escribir("Se leyó el nombre")
    return this.nombre
  }
}
