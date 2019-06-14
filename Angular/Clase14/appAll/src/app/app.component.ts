import { Component } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from "rxjs/operators"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appAll';

  fecha = new Date()

  nombre: Observable<string>

  textoABuscar: string = ""

  listado = [
    { titulo: "El Perfume", descripcion: "Narra la historia de un asesino que mata mujeres para robar su esencia y crear perfumes" },
    { titulo: "El Caballero Carmelo", descripcion: "Relata la historia de un gallo viejo que se enfrenta al ají seco, el cual es un gallo más joven" }
  ]

  ngOnInit() {
    this.nombre = this.obtenerNombre()
  }

  obtenerNombre(): Observable<string> {
    return of("FullStack")
      .pipe(
        delay(2000)
      )
  }
}
