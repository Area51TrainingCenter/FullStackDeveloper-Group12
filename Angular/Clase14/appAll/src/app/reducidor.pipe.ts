import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "reducidor"
})
export class ReducidorPipe implements PipeTransform {
  transform(texto: string, limite: number = 40, adicional: string = "clic aqui") {
    if (texto.length <= limite) return texto

    return texto.substring(0, limite) + " " + adicional
  }
}
