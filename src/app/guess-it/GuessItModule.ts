import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Controllers
import { GuessItController } from './GuessItController';

@NgModule({
  // array dei Components
  declarations: [GuessItController],
  // array delle dipendenze di modules
  imports: [
    BrowserModule,
    FormsModule
  ],
  // array dei services e altro
  providers: [],
  // array dei Components da istanziare (quando parte)
  bootstrap: [GuessItController]
})

export class GuessItModule{}
