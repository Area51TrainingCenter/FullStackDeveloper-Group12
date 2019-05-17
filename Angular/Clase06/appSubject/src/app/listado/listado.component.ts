import { LibroService } from '../libro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  textoMensaje: {} = {}

  constructor(private libroService: LibroService) {
    this.libroService.subject.subscribe((mensaje) => {
      this.textoMensaje = mensaje
    })
  }

  ngOnInit() {
  }

}
