import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { Cart, CartItem } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({ items: [] });


  constructor(
    private snackBar: MatSnackBar,
    private translate: TranslateService
  ) {
    if (JSON.parse(localStorage.getItem('cartItems')!)) {
      this.cart.next({ items: JSON.parse(localStorage.getItem('cartItems')!) })
    }
  }

  addToCart(obj: CartItem): void {
    const items = [...this.cart.value.items];
    const itemsInCart = items.find((item: CartItem) => item.id === obj.id);

    if (itemsInCart) {
      itemsInCart.quantity += 1;
      this.cart.next({ items: items });
    } else {
      const array = [...items, obj];
      this.cart.next({ items: array });
    }
    localStorage.setItem("cartItems", JSON.stringify(this.cart.value.items));


    this.snackBar.open(this.translate.instant('1 item added to cart.'), 'OK', { duration: 3000 });

  }


  getTotalPrice(items: Array<CartItem>): number {
    // find all the quantity, and after , we sum the total for each row
    return items.map((item) => item.price * item.quantity).reduce((prev, current) => prev + current, 0);

  }

  clearCart(): void {
    this.cart.next({ items: [] });
    this.snackBar.open('cart is cleared.', 'ok', { duration: 3000 });
    localStorage.setItem("cartItems", JSON.stringify([]));

  }

  get items(): Cart {

    return this.cart.value;
  }


  removeOneItem(item: CartItem): void {
    const filteredItems = this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    );
    this.cart.next({ items: filteredItems });
    localStorage.setItem("cartItems", JSON.stringify(filteredItems));

    this.snackBar.open('1 item remved from cart .', 'ok', { duration: 3000 });
  }









  removeQuantity(item: CartItem): void {

    let itemForRemoval: CartItem | undefined;
    const filterItems = this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;

        // if quantity is 0 , we need to cancel from cart !
        if (_item.quantity === 0) {

          itemForRemoval = _item;

        }
      }


      return _item;

    });




    if (itemForRemoval) {
      this.removeOneItem(itemForRemoval);


    }


    else {
      this.cart.next({ items: filterItems });

      this.snackBar.open('1 item removed from cart ', 'ok ', { duration: 3000 });


    }



  }



}
