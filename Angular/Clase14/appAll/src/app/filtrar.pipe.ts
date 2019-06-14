import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {

  transform(arr: Array<{}>, aBuscar: string): any {
    if (aBuscar.trim() == "") return arr

    const listaFiltrada = arr.filter((item: any) => item.descripcion.toUpperCase().indexOf(aBuscar.toUpperCase()) > -1)

    return listaFiltrada;
  }

}
