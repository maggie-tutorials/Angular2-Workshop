import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-component',
  template: `
    <h3>Hi, I'm Luke</h3>
    <p>My Father's name is {{ theName }}</p>
    <button type="button" (click)="saySomething()">That's impossible!</button>
  `
})
export class ChildComponent{
  @Input() theName: string;
  @Output() eM: EventEmitter<any>;

  constructor() {
    console.log('CONSTRUCTOR: theName is undefined -->', this.theName);
    this.eM = new EventEmitter();
  }

  ngOnInit() {
    console.log('NGONINIT: theName is populated --->', this.theName);
  }

  saySomething() {
    this.eM.emit({
      name: 'Obi Wan Kenobi'
    });
  }
}
