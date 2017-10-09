
import { Component } from '@angular/core';

@Component({
  selector: 'directives',
  template: `
    <h1>Directives</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <span [hidden]="hideParagraph">nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
    </p>
    <a href="#" (click)="showParagraph($event)" *ngIf="hideParagraph === true">Mostra tutto</a>
    <hr>
    <table border="1" cellspacing="0" cellpadding="8">
      <thead>
        <tr>
          <th></th>
          <th>Band</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let record of records">
          <td><input type="checkbox"></td>
          <td>{{ record.band }}</td>
          <td>{{ record.title }}</td>
        </tr>
      </tbody>
    </table>
    <h5>Add record</h5>
    <input type="text" placeholder="Band..." [(ngModel)]="newRecord.band">
    <input type="text" placeholder="Title..." [(ngModel)]="newRecord.band">
    <button type="submit" (click)="addRecord()">Add</button>
  `
})
export class DirectivesController{
  hideParagraph: boolean;
  records: any[];
  newRecord: any;

  constructor() {
    this.hideParagraph = true;
    this.records = [
      {
        title: 'The Dark Side of The Moon',
        band: 'Pink Floyd'
      },
      {
        title: 'Foxtrot',
        band: 'Genesis'
      },
      {
        title: 'Aqualung',
        band: 'Jethro Tull'
      }
    ];
    this.newRecord = { title: null, band: null };
  }

  showParagraph(event) {
    event.preventDefault();
    this.hideParagraph = false;
  }

  addRecord() {
    this.records.push(this.newRecord);
  }
}
