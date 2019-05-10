import { DataService } from './data.service';
import { LogService } from './log.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombreCurso: string

  constructor(private obj: DataService, private log: LogService) {
    this.leer()
    this.obj.onEnviarNuevoNombre.subscribe(
      data => {
        this.nombreCurso = data
      }
    )
  }

  leer() {
    this.nombreCurso = this.obj.leerNombre()
  }
}
