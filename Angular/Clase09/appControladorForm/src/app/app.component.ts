import { AlumnoService } from './alumno.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("f") formulario: NgForm

  constructor(private alumnoService: AlumnoService) { }

  ingresar() {
    console.log(this.formulario)
  }

  listar() {
    console.log("LISTAR", this.alumnoService.listar("nombre"))
  }

  listarPaginado() {
    console.log("LISTAR PAGINADO", this.alumnoService.listarPaginado(3, 3, "apellido"))
  }

  detallar() {
    console.log("DETALLAR", this.alumnoService.detallar(1))
  }

  insertar() {
    this.alumnoService.insertar({ nombre: "Carmen", apellido: "Lara", colegio: "Guadalupe" })

    console.log("INSERTAR", this.alumnoService.listar())
  }

  modificar() {
    this.alumnoService.modificar({ nombre: "Juanito", apellido: "Alimaña", colegio: "La Calle" }, 1)

    console.log("MODIFICAR", this.alumnoService.listar())
  }

  eliminar() {
    this.alumnoService.eliminar(0)

    console.log("ELIMINAR", this.alumnoService.listar())
  }

}
