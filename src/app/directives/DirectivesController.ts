import { Component } from '@angular/core';
import { Record } from './../../models/directives/Record';

@Component({
  selector: 'directives',
  templateUrl: './directives.html',
  styles: [
    `
      TR.active TD {
        background: yellow
      }
      .tabbed {
        border: 1px solid #ccc;
        font-family: Helvetica, sans-serif;
      }
      .tabbed .navigator {
        background-color: #ff6600;
      }
      .tabbed .navigator a {
        display: inline-block;
        color: #fff;
        padding: 20px;
        text-decoration: none;
      }
      .tabbed .navigator a:hover {
        background-color: #fff;
        color: #ff6600;
      }
      .tabbed .navigator a.active {
        background-color: #cc5200;
      }
      .tabbed .tabbed-body {
        padding: 20px;
      }
    `
  ]
})
export class DirectivesController{
  hideParagraph: boolean;
  records: Record[];
  newRecord: any;
  tabIndex: number;

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

  setTabIndex(event, index) {
    event.preventDefault();
    this.tabIndex = index;
  }
}
