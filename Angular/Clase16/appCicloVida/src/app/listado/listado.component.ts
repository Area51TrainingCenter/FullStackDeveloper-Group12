import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() {
    console.log("Constructor Listado")
  }

  ngOnInit() {
    console.log("ngOnInit Listado")
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit Listado")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit Listado")
  }

}
