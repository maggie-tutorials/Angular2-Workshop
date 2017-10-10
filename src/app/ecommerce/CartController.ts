import { Component } from '@angular/core';
import { Book } from '../../models/ecommerce/BookModel';
import { BookStoreService } from '../../services/ecommerce/BookStoreService';
import { CartService } from '../../services/ecommerce/CartService'

@Component({
  selector: 'ecommerce-app',
  templateUrl: '../../views/ecommerce/cart.html'
})
export class CartController{
  products: Book[];
  total: number;

  constructor(
    private bookStoreService : BookStoreService,
    private cartService : CartService
  ){
    // Recupero il catalogo libri dal Service
    this.products = bookStoreService.getBookCatalog();
    this.total = cartService.getTotal();
  }

  addToCart(payload) {
    // modifico qtyInCart in payload.book
    payload.book.setQtyInCart(parseInt(payload.qty));
    
    // lo passo al Service per fare addToCart
    this.cartService.addToCart(payload.book);

    // Aggiorno il totale
    this.total = this.cartService.getTotal();
  }
}
