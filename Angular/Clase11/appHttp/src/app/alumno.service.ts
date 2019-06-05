import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from './alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  onListar = new EventEmitter<string>()

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>("http://clase.tibajodemanda.com/alumno")
  }

  getOne(_id: string): Observable<any> {
    return this.http.get<any>("http://clase.tibajodemanda.com/alumno/" + _id)
  }

  insert(alumno: Alumno) {
    this.http.post("http://clase.tibajodemanda.com/alumno", alumno)
      .subscribe(
        data => { this.onListar.emit("Registro insertado") },
        error => console.log(error)
      )
  }

  update(_id: string, alumno: Alumno): Observable<any> {
    return this.http.put("http://clase.tibajodemanda.com/alumno/" + _id, alumno)
  }

  delete(_id: string): Observable<any> {
    return this.http.delete("http://clase.tibajodemanda.com/alumno/" + _id)
  }
}
