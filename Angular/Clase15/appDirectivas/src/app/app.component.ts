import { Component, ViewChild, ElementRef } from '@angular/core';

FileList.prototype["forEach"] = function (callback) {
  [].forEach.call(this, callback)
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("zona", { static: true }) zona: ElementRef
  color1: string = "brown"
  color2: string = "magenta"

  activo: boolean = false

  listaImagenes: File[] = []

  archivosRecibidos(archivos: FileList) {
    archivos["forEach"]((archivo: File) => {
      if (archivo.type.startsWith("image/")) {
        this.listaImagenes.push(archivo)

        const fr = new FileReader()
        fr.onloadend = e => {
          console.log((e.target as FileReader).result)
          const imagen = (e.target as FileReader).result

          this.zona.nativeElement.style = "background-image:url(" + imagen + ");background-size:contain;background-repeat:no-repeat;background-position:center"
        }


        fr.readAsDataURL(archivo)
      }
    })
    /* console.log(archivos[1]) */
  }
}
