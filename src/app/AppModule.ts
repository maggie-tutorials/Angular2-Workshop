import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HelloController } from './hello/HelloController';
import { GuessItController } from './guess-it/GuessItController';
import { DirectivesController } from './directives/DirectivesController';

@NgModule({
  // array dei Components
  declarations: [
    HelloController,
    GuessItController,
    DirectivesController
  ],
  // array delle dipendenze di modules
  imports: [
    BrowserModule,
    FormsModule
  ],
  // array dei services e altro
  providers: [],
  // array dei Components da istanziare (quando parte)
  bootstrap: [
    HelloController,
    GuessItController,
    DirectivesController
  ]
})

export class AppModule{}
