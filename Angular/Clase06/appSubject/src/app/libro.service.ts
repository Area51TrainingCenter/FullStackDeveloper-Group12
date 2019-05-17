import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  subject: Subject<{}> = new Subject()

  constructor() { }
}
