import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NegritaDirective } from './negrita.directive';
import { UploadDirective } from './upload.directive';

@NgModule({
  declarations: [
    AppComponent,
    NegritaDirective,
    UploadDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
