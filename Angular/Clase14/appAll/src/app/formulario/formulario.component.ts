import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms"
import { canDeactivateFuncion } from '../canDeactivateFuncion.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit, canDeactivateFuncion {

  grupo: FormGroup
  dataOriginal: any

  constructor() { }

  ngOnInit() {
    this.grupo = new FormGroup({
      nombre: new FormControl(""),
      apellido: new FormControl("")
    })

    this.dataOriginal = this.grupo.getRawValue()
  }

  canDeactivateData(): boolean {
    const dataActual = this.grupo.getRawValue()

    let cambio = false

    for (let prop in dataActual) {
      if (this.dataOriginal[prop] != dataActual[prop]) cambio = true
    }

    return cambio
  }

}
