// Used in the Directives exercise
export class Record {
  title: string;
  band: string;
  selected: boolean;

  constructor(t: string, b: string, s? : boolean) {
    this.title = t;
    this.band = b;
    this.selected = s != null ? s : false;
  }
}
