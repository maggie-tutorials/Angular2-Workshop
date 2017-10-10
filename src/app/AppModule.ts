import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HelloController } from './hello/HelloController';
import { GuessItController } from './guess-it/GuessItController';
import { DirectivesController } from './directives/DirectivesController';

// Hierarchy Components
import { MainComponent } from './hierarchy/MainComponent';
import { ChildComponent } from './hierarchy/ChildComponent';

// eCommerce Components
import { CartController } from './ecommerce/CartController';
import { TheBookComponent } from './ecommerce/TheBookComponent';
// services
import { BookStoreService } from '../services/ecommerce/BookStoreService';
import { CartService } from '../services/ecommerce/CartService';

@NgModule({
  // array dei Components
  declarations: [
    HelloController,
    GuessItController,
    DirectivesController,
    // Hierarchy
    MainComponent,
    ChildComponent,
    // Ecommerce
    CartController,
    TheBookComponent
  ],
  // array delle dipendenze di modules
  imports: [
    BrowserModule,
    FormsModule
  ],
  // array dei services e altro
  providers: [
    BookStoreService,
    CartService
  ],
  // array dei Components da istanziare (quando parte)
  bootstrap: [
    CartController
  ]
})

export class AppModule{}
