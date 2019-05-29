import { Injectable } from '@angular/core';
import { Generico } from './generico';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService extends Generico {

  constructor() {
    super([
      { nombre: "Juan", apellido: "Suarez", colegio: "Carmelitas" },
      { nombre: "Amelia", apellido: "Montes", colegio: "San Agustin" },
      { nombre: "Claudia", apellido: "Ríos", colegio: "Cristo Rey" },
      { nombre: "Alberto", apellido: "Guevara", colegio: "Barletti" },
      { nombre: "Alfredo", apellido: "Ballón", colegio: "Vedruna" },
      { nombre: "Miguel", apellido: "Atala", colegio: "Inés de la Cruz" },
      { nombre: "Sara", apellido: "Chavez", colegio: "Las Toledo" },
      { nombre: "Susan", apellido: "Pedraza", colegio: "De Jesús" },
      { nombre: "Almendra", apellido: "Schultz", colegio: "San Silvestre" },
      { nombre: "Rolando", apellido: "Lumiere", colegio: "Lincoll" }
    ])
  }
}
