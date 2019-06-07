import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators"

export class AppInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let peticionClonada = req.clone()

    return next.handle(peticionClonada)
      .pipe(
        tap(() => console.log("petición clonada"))
      )
  }
}
