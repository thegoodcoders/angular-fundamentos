import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    DirectivesModule,
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
