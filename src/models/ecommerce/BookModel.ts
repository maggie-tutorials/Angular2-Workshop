export class  Book {
  private isbn: string;
  private title: string;
  private qty: number;
  private price: number;
  private promo: boolean;
  private qtyInCart: number;

  constructor(
    isbn: string,
    title: string,
    qty: number,
    price: number,
    promo?: boolean
  ) {
    this.isbn = isbn;
    this.title = title;
    this.qty = qty;
    this.price = price;
    this.promo = this.promo ? this.promo : false;
    this.qtyInCart = 0;
  }

  getIsbn() : string { return this.isbn }
  getTitle() : string { return this.title }
  getQty() : number { return this.qty }
  setQty(n : number) { this.qty = n }
  getPrice() : number { return this.price }
  getPromo() : boolean { return this.promo }
  getQtyInCart() : number { return this.qtyInCart }
  setQtyInCart(n : number) { this.qtyInCart = n }
}
