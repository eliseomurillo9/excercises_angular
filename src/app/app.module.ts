import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NouveauComponent } from './nouveau/nouveau.component';
import { ExercisesComponent } from './exercises/exercises.component';

@NgModule({
  declarations: [
    AppComponent,
    NouveauComponent,
    ExercisesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
