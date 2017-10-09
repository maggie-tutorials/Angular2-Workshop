import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DirectivesController } from './DirectivesController';

@NgModule({
  // array dei Components
  declarations: [
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
    DirectivesController
  ]
})

export class DirectivesModule{}
