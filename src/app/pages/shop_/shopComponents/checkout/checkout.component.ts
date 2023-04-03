import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Cart } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.less']
})
export class CheckoutComponent {


  cartCheckout: Cart = { items: [] };
  OrderForm!: FormGroup;
  orderId!: number;
  payment: boolean = false;
  Shipping: boolean = false;
  isFormIncomplete: boolean = true;

  constructor(private route: ActivatedRoute,
    private Router: Router, private OrderBuilder: FormBuilder,
    public CartService: CartService,
    private  orderService: OrderService) { }

  ngOnInit(): void {
    // Retrieve the cart data from the query parameter
    const cartData = this.route.snapshot.queryParams['cart'];
    if (cartData) {
      this.cartCheckout.items = JSON.parse(cartData);
    }


    setTimeout(() => {
      const section = document.getElementById('start');
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    });


    this.orderId = Math.floor(Math.random() * 101)
   const date = new Date();

    this.OrderForm = this.OrderBuilder.group({
      user: this.OrderBuilder.group({
        idOrder: this.orderId,
        firstname: [null, [Validators.required, Validators.minLength(2)]],
        lastname: [null, [Validators.required, Validators.minLength(2)]],
        email: [null,[Validators.required, Validators.email]],
        phone: [null, [Validators.required, Validators.pattern('[- +()0-9]{9,12}')]],
        items:[this.cartCheckout.items],
        dateOrder: date
      }),
      address: this.OrderBuilder.group({

        country: [],
        street: [],
        houseNumber: [],
        zipcode: [],
        city: []
      }),

    })


  }
  get userInvalid() {

    return this.OrderForm.get('user')?.invalid

  }

  get isFirstnameInvalid() {

    return this.OrderForm.get('user.firstname')

  }
  get isLastnameInvalid() {

    return this.OrderForm.get('user.lastname')

  }


  get isMailInvalid() {

    return this.OrderForm.get('user.email')

  }

  get isPhoneInvalid() {
    return this.OrderForm.get('user.phone');
  }



  back(): void {

    this.Router.navigate(['/cart']);

  }

toShop(): void {

  this.Router.navigate(['/shop','all']);

  }

  createOrder(): void {

    this.payment = true;
    this.CartService.clearCart()
    this.orderService.orderValidation(this.OrderForm.value)
    console.log(this.OrderForm.value);

  }


  toggleShipping()
  {
    this.Shipping=!this.Shipping
}

}
