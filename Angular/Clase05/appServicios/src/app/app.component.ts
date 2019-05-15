import { DataService } from './data.service';
import { Component } from '@angular/core';
import { ICurso } from './modelos/curso.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombreCurso: string

  //listaCursos: Array<string>
  //listaCursos: {}[]
  //listaCursos: Array<{}>
  //listaCursos: any[]
  //listaCursos: Array<Object>
  //listaCursos: Object[] = []
  //listaCursos: { nombre: string, cantidad: number, estado?: boolean }[] = []
  listaCursos: ICurso[] = []

  constructor(private obj: DataService) {
    this.leer()
    this.obj.onEnviarNuevoNombre.subscribe(
      data => {
        this.nombreCurso = data
      }
    )

    this.listaCursos.push({ nombre: "Angular", cantidad: 12, estado: true })
    this.listaCursos.push({ nombre: "Node", cantidad: 14, estado: false })
    this.listaCursos.push({ nombre: "Mongo", cantidad: 15, estado: true })
    this.listaCursos.push({ nombre: "React", cantidad: 5 })

    console.log("Lista de cursos", this.listaCursos)

  }

  leer() {
    this.nombreCurso = this.obj.leerNombre()
  }
}
