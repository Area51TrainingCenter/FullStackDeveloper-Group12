import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  usuarios: Array<{}>

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.usuarios = this.activatedRoute.snapshot.data.lista

    /* const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { usuario: "usuario1" },
          { usuario: "usuario2" },
          { usuario: "usuario3" }
        ])
        reject({ status: 404, message: "Path not found" })
      }, 2000)

      setTimeout(() => {
        resolve([
          { usuario: "usuario1" },
          { usuario: "usuario2" },
          { usuario: "usuario3" }
        ])
      }, 5000)
    })

    promesa.then(
      (resultados) => console.log(resultados),
      (error) => console.log(error)
    )

    promesa
      .then((resultados) => console.log(resultados))
      .catch((error) => console.log(error))

    promesa.then((resultados) => console.log(resultados))
    promesa.catch((error) => console.log(error))

    const results: Promise<Array<{}>> = promesa.then() */


  }

}
