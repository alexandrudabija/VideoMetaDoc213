import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart, CartItem } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about-the-cart',
  templateUrl: './about-the-cart.component.html',
  styleUrls: ['./about-the-cart.component.less']
})
export class AboutTheCartComponent implements OnInit {
  public cart$ = new Observable<Cart>
  public _cart: Cart = { items: [] };
  public itemsQuantity: number = 0;

  constructor(private CartService: CartService,  public router: Router) { }


  ngOnInit(): void {
    this.cart$ = this.CartService.cart;
    this.cart$.subscribe((cart: Cart) => {
      this.cart = cart;

      // this method use the set cart() to set qty in badge
    })
  }

  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;
    this.itemsQuantity = cart.items.map((item: any) => item.quantity)
      .reduce((prev: any, current: any) => prev + current, 0);
  }

  getTotalPrice(items: Array<CartItem>): number {
    return this.CartService.getTotalPrice(items);
  }
  onClearCart(): void {
    this.CartService.clearCart();
  }

  toCart(): void {
    this.router.navigate(['/cart'])


  }


}
