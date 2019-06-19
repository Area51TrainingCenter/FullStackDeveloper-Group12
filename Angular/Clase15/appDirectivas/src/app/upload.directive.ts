import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appUpload]'
})
export class UploadDirective {

  @Output() onHover = new EventEmitter<boolean>()
  @Output() onSeleccion = new EventEmitter<FileList>()

  constructor() { }

  @HostListener("dragover", ["$event"]) entrar($event) {
    $event.preventDefault()
    this.onHover.emit(true)
  }

  @HostListener("dragleave", ["$event"]) salir($event) {
    $event.preventDefault()
    this.onHover.emit(false)
  }

  @HostListener("drop", ["$event"]) soltar($event) {
    $event.preventDefault()
    this.onHover.emit(false)

    const lista: FileList = $event.dataTransfer.files
    this.onSeleccion.emit(lista)
  }

}
