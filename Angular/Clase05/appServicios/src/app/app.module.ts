import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CambiarCursoComponent } from './cambiar-curso/cambiar-curso.component';
import { DataService } from './data.service';
import { LogService } from './log.service';
import { FormsModule } from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    CambiarCursoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
