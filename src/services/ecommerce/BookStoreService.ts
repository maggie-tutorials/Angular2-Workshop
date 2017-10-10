import  { Injectable } from '@angular/core';
import { Book } from '../../models/ecommerce/BookModel';

@Injectable()
export class BookStoreService{
  private products: Book[];

  constructor() {
    this.products = [];
    this.products.push(
      new Book('JIIUHIUISD', "Cappuccetto Rosso", 5, 9.99)
    );
    this.products.push(
      new Book('OISJIOFJHH', "Pinocchio", 25, 8.75, true)
    );
    this.products.push(
      new Book('WIUEH24OIJ', "Zanna Bianca", 19, 12.60, true)
    );
    this.products.push(
      new Book('OIDIH1ISJI', "Cappuccetto Rosso", 8, 8.30)
    );
    this.products.push(
      new Book('ALDIOD23NJ', "L'isola del tesoro", 11, 14.99)
    );
  }

  getBookCatalog() : Book[]{
    return this.products;
  }
}
