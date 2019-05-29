export class Generico {

  constructor(private datos: Array<{}>) { }

  listar(orden: string = ""): Array<{}> {
    const data = Object.assign([], this.datos)
    if (orden) {
      return data.sort((a, b) => {
        return a[orden] > b[orden] ? 1 : -1
      })
    }

    return data
  }

  listarPaginado(tamano: number, desplazamiento: number, orden: string = ""): { datos: Array<{}>, total: number } {
    let data = this.listar(orden)

    return {
      datos: data.slice(desplazamiento, desplazamiento + tamano),
      total: data.length
    }
  }

  detallar(indice: number): {} {
    return Object.assign({}, this.datos[indice])
  }

  insertar(data: {}): void {
    this.datos.push(data)
  }

  modificar(data: {}, indice: number): void {
    this.datos[indice] = data
  }

  eliminar(indice: number): void {
    this.datos.splice(indice, 1)
  }
}
