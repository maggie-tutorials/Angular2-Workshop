
import { Component } from '@angular/core';

@Component({
  selector: 'guess-it',
  template: `
    <h1>Guess It</h1>
    <div>
      <input type="number" [(ngModel)]="guess" placeholder="Enter your number" />
      <button type="button" (click)="verify()">Verify</button>
    </div>
    <p>My secret number is: {{ numberToGuess }}</p>
    <p>Attempts: {{attempts}}</p>
    <div *ngIf="deviation == 0">Perfect! The number was actually {{ numberToGuess }}</div>
    <div *ngIf="deviation > 0">Try again with a lower number</div>
    <div *ngIf="deviation < 0">Try again with a higher number</div>
    <button type="button" (click)="restart()">RESTART THE GAME</button>
  `
})
export class GuessItController{
  numberToGuess: number;    // numero da indovinare
  guess: number;            // tentativo dell'utente legato all'input type text
  attempts: number;         // tentativi
  deviation: number;        // errore

  constructor() {
    this.initGame();
  }

  initGame() {
    this.attempts = 0;
    this.numberToGuess = Math.floor((Math.random() * 100) + 1);
    this.deviation = undefined;
    this.guess = undefined;

  }

  verify() {
    this.attempts++;
    this.deviation = this.guess - this.numberToGuess;
  }

  restart() {
    this.initGame();
  }
}
