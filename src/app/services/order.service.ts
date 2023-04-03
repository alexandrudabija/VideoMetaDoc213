import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
@Injectable({
  providedIn: 'root'
})
export class OrderService {


  constructor() { }

  orderValidation(order:Order)
  {

console.log(order);


  }




}
