import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../../models/ecommerce/BookModel';

@Pipe({name: 'filterByKeyword'})
export class FilterByKeyword {
  transform(catalog: Book[], args: string) {
    if (!args || typeof args !== 'string') {
      return catalog;
    } else {
      return catalog.filter(book => book.getTitle().toLowerCase().indexOf(args.toLowerCase()) > -1 || String(book.getPrice()).indexOf(args) > -1);
    }
  }
}
