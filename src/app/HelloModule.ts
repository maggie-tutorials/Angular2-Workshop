import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HelloController } from './HelloController';

@NgModule({
  // array dei Components
  declarations: [HelloController],
  // array delle dipendenze di modules
  imports: [BrowserModule],
  // array dei services e altro
  providers: [],
  // array dei Components da istanziare (quando parte)
  bootstrap: [HelloController]
})

export class HelloModule{}
