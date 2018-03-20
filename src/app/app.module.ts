import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DaakModule } from './daak/daak.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DaakModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
