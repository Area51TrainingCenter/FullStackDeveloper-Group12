import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {

  _id: number

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    //this._id = this.rutaActiva.snapshot.params.id

    this.rutaActiva.paramMap.subscribe(
      (parametros: Params) => {
        this._id = parametros.params.id
      }
    )
  }

}
