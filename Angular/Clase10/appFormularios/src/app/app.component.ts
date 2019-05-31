import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("f") formulario: NgForm

  login() {
    if (this.formulario.valid) {
      alert("Formulario Válido")
      this.formulario.reset({ correo: "sergio@cor.pe" })
    }
    //console.log(this.formulario)
  }

  cargar() {
    //this.formulario.setValue({ correo: "sergio@belcorp.com.pe", contrasena: "1234567" })
    //this.formulario.setValue({ correo: "sergio@belcorp.com.pe" })
    this.formulario.form.patchValue({ correo: "sergio@belcorp.com.pe" })
  }
}
