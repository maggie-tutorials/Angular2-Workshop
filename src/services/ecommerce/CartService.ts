import { Injectable } from '@angular/core';
import { Book } from '../../models/ecommerce/BookModel';

@Injectable()
export class CartService {
  contents: Book[];
  shippingCost: number;
  discount: number;

  constructor() {
    this.contents = [];
    this.discount = 0;
  }

  addToCart(book : Book) {
    this.contents.push(book);
  }

  getTotal() : number {
    // secondo me questo si può fare con reduce
    let t = 0;
    for (let book of this.contents) {
      t += book.getPrice() * book.getQtyInCart();
    }
    return t;
  }

  getCount() : number {
    return this.contents.length;
  }
}
