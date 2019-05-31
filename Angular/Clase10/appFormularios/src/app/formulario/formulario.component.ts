import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  grupo: FormGroup

  correosNoValidos: Array<string> = [
    "gmail.com", "outlook.com", "yahoo.com"
  ]

  constructor() { }

  ngOnInit() {
    this.grupo = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email, this.validarCorreoEmpresarial.bind(this)]),
      contrasena: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      confirmar: new FormControl(null, this.validarConfirmacion)
    })
  }

  login() {
    if (this.grupo.valid) {
      alert("Formulario válido")
      console.log(this.grupo.value)
      console.log(this.grupo.getRawValue())
      this.grupo.reset()
    } else {
      alert("Formulario no válido")
    }
  }

  cargar() {
    this.grupo.patchValue({ correo: "sergio@correo.com" })
  }

  validarCorreoEmpresarial(control: FormControl): { [s: string]: boolean } {
    if (control && control.value) {
      const partes = control.value.split("@")

      if (partes.length < 2) return null

      const dominioCorreo = partes[1].toLowerCase()

      const correoExistente = this.correosNoValidos.filter(el => el === dominioCorreo
      )
      if (correoExistente.length === 0) return null

      return { correoGratuito: true }
    }
    return null
  }

  validarConfirmacion(control: AbstractControl): { [s: string]: boolean } {

    if (!control || !control.parent) return null

    const contrasena = control.parent.get("contrasena")
    const confirmar = control.parent.get("confirmar")

    if (!contrasena || !confirmar) return null

    if (confirmar.value === "") return null

    if (contrasena.value === confirmar.value) return null

    return { confirmacionInvalida: true }

  }

}
