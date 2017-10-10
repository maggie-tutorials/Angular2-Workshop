import { Component } from '@angular/core';

@Component({
  selector: 'hierarchy',
  template: `
    <h1>Luke, I'm your Father</h1>
    <child-component [theName]="name" (eM)="handleEvent($event)"></child-component>
  `
})
export class MainComponent{
  name: string;

  constructor() {
    this.name = 'Darth Vader';
  }

  handleEvent(event) {
    this.name = event.name;
  }
}
