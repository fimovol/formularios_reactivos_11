import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrincipalModule } from './principal/principal.module';
import { Tarea11Module } from './tarea11/tarea11.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrincipalModule,
    Tarea11Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
