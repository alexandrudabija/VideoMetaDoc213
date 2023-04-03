import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.less']
})
export class ProductBoxComponent {
  @Input() fullWidthMode: boolean = false;
  @Input() product: Product |undefined ;
  @Output() addToCart = new EventEmitter<Product>;


  addOnCart(item: Product)
  {
    console.log(item);


    this.addToCart.emit(item)

}
}
