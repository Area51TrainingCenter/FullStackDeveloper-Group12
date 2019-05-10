import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CambiarCursoComponent } from './cambiar-curso/cambiar-curso.component';
import { DataService } from './data.service';
import { LogService } from './log.service';

@NgModule({
  declarations: [
    AppComponent,
    CambiarCursoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
