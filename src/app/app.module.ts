import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterAloneComponent } from './stand-alone/components/counter-alone/counter-alone.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CounterAloneComponent,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
