
import { Component, OnInit } from '@angular/core';
import { AlumnoService } from './alumno.service';
import { Alumno } from './alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alumnos: Array<Alumno>

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.listar()

    this.alumnoService.onListar.subscribe(
      data => {
        this.listar()
        alert(data)
      }
    )
  }

  listar() {
    this.alumnoService.getAll()
      .subscribe(
        data => {
          this.alumnos = data.results
        },
        error => console.log(error)
      )
  }

  insertar() {
    this.alumnoService.insert({ nombre: "Sergio", apellido: "Hidalgo" })
    /* .subscribe(
      data => {
        this.listar()
        alert("Registro insertado")
      },
      error => console.log(error)
    ) */
  }

  eliminar(_id: string) {
    if (confirm("¿Quiere eliminar?")) {
      this.alumnoService.delete(_id)
        .subscribe(
          data => this.listar(),
          error => console.log(error)
        )
    }
  }
}
