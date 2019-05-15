import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service"
import { LogService } from '../log.service';

@Component({
  selector: 'app-cambiar-curso',
  templateUrl: './cambiar-curso.component.html',
  styleUrls: ['./cambiar-curso.component.css']
})
export class CambiarCursoComponent implements OnInit {
  //obj: DataService

  constructor(private obj: DataService) {
    //this.obj = obj
  }

  ngOnInit() {
  }

  mostrar() {
    //const obj = new DataService()
    alert(this.obj.leerNombre())
  }

}
