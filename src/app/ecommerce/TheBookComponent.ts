import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/ecommerce/BookModel';

@Component({
  selector: 'the-book',
  templateUrl: '../../views/ecommerce/book.html',
  styles: [`
    .thebook-row {
      padding: 10px 0;
    }
  `]
})
export class TheBookComponent{
  bookQty: string;
  @Input() theBook : Book;
  @Output() eM : EventEmitter<any>;

  constructor() {
    this.eM = new EventEmitter();
  }

  qtyIsValid() : boolean {
    let quantity = parseInt(this.bookQty);
    return isNaN(quantity) || quantity > this.theBook.getQty();
  }

  propagateAddToCart() {
    this.theBook.setQty(this.theBook.getQty() - parseInt(this.bookQty));
    
    // Call parent and emit add to cart event
    this.eM.emit({
      book: this.theBook,
      qty: this.bookQty
    });
  }
}
