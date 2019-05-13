import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DataService} from '../servicios/data.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string
  contrasena: string
  mostrar: boolean = true
 titulo:string=""
 descripcion:string=""

  @Output() onLogin: EventEmitter<any> = new EventEmitter<any>()

  constructor(private DataService:DataService) { }

  ngOnInit() {
    
  }

  capturarUsuario(value: string) {
    this.usuario = value
  }

  capturarContrasena(value: string) {
    this.contrasena = value
  }

  ingresar() {
    /* alert(this.usuario + " " + this.contrasena) */
    this.onLogin.emit()
  }

  grabar(){
  //this.titulo=document.getElementById("txtTitulo").innerText
   //this.descripcion = document.getElementById("txtDescripcion").innerText

    this.DataService.Nuevo(this.usuario,this.contrasena)
    
    this.onLogin.emit()
  }

}