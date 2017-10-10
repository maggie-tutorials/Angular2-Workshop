import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../../models/ecommerce/BookModel';
@Pipe({
  name: 'booksForSale'
})
export class BooksForSale implements PipeTransform {
  // L'unico metodo della Pipe è transform, che prende un input e ritorna un Output
  transform(bookTitle, args : Book) {
    // Check argomenti passati alla Pipe

    if (!args || !(args instanceof Book) || !args.isPromo()) {
      return bookTitle;
    } else {
      return bookTitle + '** SALE **';
    }
  }
}
