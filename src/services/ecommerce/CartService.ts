import { Injectable } from '@angular/core';
import { Book } from '../../models/ecommerce/BookModel';

@Injectable()
export class CartService {
  contents: Book[];
  shCost: number;
  discount: number;

  constructor() {
    this.contents = [];
    this.discount = 0;
  }

  addToCart(book : Book) {
    let foundBook = this.contents.find((item : Book) => {
      return item.getIsbn() === book.getIsbn();
    });

    if (foundBook) {
      foundBook.setQtyInCart(book.getQtyInCart())
    } else {
      this.contents.push(book);
    }
  }

  getTotal() : number {
    let t = 0;
    for (let book of this.contents) {
      t += book.getPrice() * book.getQtyInCart();
    }
    t += this.shCost;
    return t;
  }

  getCount() : number {
    return this.contents.length;
  }
}
