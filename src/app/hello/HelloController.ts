import { Component } from '@angular/core';

@Component({
  selector: 'hello-app',
  template: `
    <h1>Binding demo</h1>
    <p>{{name}}</p>
    <h4>Counter</h4>
    <p>The counter is {{ number }}</p>
    <button type="button" (click)="incrementNumber()">Increment</button>
    <button type="button" (click)="incrementBy(2)">Increment by 2</button>
  `
})
export class HelloController{
  name: string;
  number: number;

  constructor() {
    this.name = 'Maggie Serino';
    this.number = 0;
  }

  incrementNumber() {
    this.number++;
  }

  incrementBy(amount: number) {
    this.number = this.number + amount;
  }
}
