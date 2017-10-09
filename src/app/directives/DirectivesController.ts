
import { Component } from '@angular/core';

@Component({
  selector: 'directives',
  template: `
    <h1>Directives</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <span [hidden]="hideParagraph">nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
    </p>
    <a href="#" (click)="showParagraph($event)" *ngIf="hideParagraph === true">Mostra tutto</a>
  `
})
export class DirectivesController{
  hideParagraph: boolean;

  constructor() {
    this.hideParagraph = true;
  }

  showParagraph(event) {
    event.preventDefault();
    this.hideParagraph = false;
  }
}
