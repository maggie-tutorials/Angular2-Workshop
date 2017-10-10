import { Component } from '@angular/core';
import { Record } from './../../models/Record';

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
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let record of records" [ngClass]="{'active': record.selected}">
          <td><input type="checkbox" [(ngModel)]="record.selected"></td>
          <td>{{ record.band }}</td>
          <td>{{ record.title }}</td>
          <td><button type="button" (click)="removeRecord(record)">Elimina</button></td>
        </tr>
      </tbody>
    </table>
    <h5>Add record</h5>
    <input type="text" placeholder="Band..." [(ngModel)]="newRecord.band">
    <input type="text" placeholder="Title..." [(ngModel)]="newRecord.title">
    <button type="submit" (click)="addRecord()" [disabled]="validateForm()">Add</button>
    <button type="button" (click)="removeSelected()">Elimina selezionati</button>

    <p>{{ records | json }}</p>
  `,
  styles: [
    `
      TR.active TD {
        background: yellow
      }
    `
  ]
})
export class DirectivesController{
  hideParagraph: boolean;
  records: Record[];
  newRecord: any;

  constructor() {
    this.hideParagraph = true;

    this.records = [
      new Record('The Dark Side of The Moon', 'Pink Floyd'),
      new Record('Foxtrot', 'Genesis'),
      new Record('Aqualung', 'Jethro Tull')
    ];

    this.newRecord = new Record(null, null);
  }

  showParagraph(event) {
    event.preventDefault();
    this.hideParagraph = false;
  }

  addRecord() {
    this.records.push(new Record(this.newRecord.title, this.newRecord.band));
    this.newRecord = {};
  }

  removeRecord(record) {
    let index = this.records.indexOf(record);
    this.records.splice(index, 1);
  }

  removeSelected() {
    // 1st option: for loop
    // let filteredRecords: Record[] = [];
    // for (let record of this.records) {
    //   if (!record.selected) {
    //     filteredRecords.push(record);
    //   }
    // }
    // this.records = filteredRecords;

    // 2nd option: filter
    this.records = this.records.filter(record => !record.selected);
  }

  validateForm(): boolean {
    return !(
      this.newRecord.band &&
      this.newRecord.title &&
      this.newRecord.band.length > 0 &&
      this.newRecord.title.length > 0
    );
  }
}
