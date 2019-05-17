import { Component } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { LibroService } from "./libro.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  subject: Subject<string>

  constructor(private libroService: LibroService) {
    /* const obs = Observable.create((observador: Observer<string>) => {
      setTimeout(() => {
        observador.next("Alguien tocó la puerta")
      }, 3000)

      setTimeout(() => {
        observador.next("Se inundó la casa")
      }, 5000)
    })

    obs.subscribe((mensaje) => {
      console.log("Mensaje", mensaje)
    }) */

    this.subject = new Subject()

    this.subject.subscribe(datos => {
      console.log(datos)
    })

    /*     setTimeout(() => {
          subject.next("Enviando los datos")
        }, 4000) */
  }

  enviar() {
    this.libroService.subject.next({ titulo: "Pantaleón y las visitadoras" })
    //this.subject.next("Enviando los datos")
  }

}
