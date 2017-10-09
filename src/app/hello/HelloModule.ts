import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HelloController } from './HelloController';

@NgModule({
  // array dei Components
  declarations: [
    HelloController
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
    HelloController
  ]
})

export class HelloModule{}
