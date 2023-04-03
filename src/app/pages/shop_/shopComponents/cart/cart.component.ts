import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Observable, Subscription } from 'rxjs';
import { Cart, CartItem } from 'src/app/models/product.model';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
})
export class CartComponent implements OnInit {

  // public dataSource: any = { items: [] };
  public dataSource: Array<CartItem> = [];
  subscription!: Subscription;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  // for the beautiful display in the basket ,it will be displayed in rows and columns !
  // we need to set correct the rows and colums in cart.component
  displayedColumns: Array<string> = [
    'image',
    'manufacturer',
    'model',
    'price',
    'quantity',
    'total',
    'action',
  ];

  public _cart$ = new Observable<Cart>();

  constructor(
    private CartService: CartService,
    private snackBar: MatSnackBar,
    public Router: Router
  ) {}


  ngOnInit(): void {
    this._cart$ = this.CartService.cart;

    this._cart$.subscribe((_cart: any) => {
      this.dataSource = _cart.items;
    })


  }


  get cart(): Array<CartItem> {
    return this.dataSource;
  }

  toCheckout(): void {
    this.Router.navigate(['/checkout'], {
      queryParams: { cart: JSON.stringify(this.cart) },
    });
  }

  StartShoppingToggle(): void {

    this.Router.navigate(['/shop','all']);
  }
  // we call total for all elemts in cart;
  getTotalPrice(items: Array<CartItem>): number {
    return this.CartService.getTotalPrice(items);
  }

  onClearCart(): void {
    this.CartService.clearCart();
  }

  removeOneItem(item: CartItem): void {
    this.CartService.removeOneItem(item);
  }

  removeQuantity(item: CartItem): void {
    this.CartService.removeQuantity(item);
  }

  onAddQuantity(item: CartItem): void {
    this.CartService.addToCart(item);
  }
}
