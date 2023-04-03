import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil, Subscription } from 'rxjs';
import { Product, Products } from 'src/app/models/product.model';
import { ProductsService } from '../../../services/products.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.less'],

})
export class ShopComponent implements OnInit,OnDestroy {
  manufacturer$: Observable<string> | undefined;
  category$: Observable<string> | undefined;

  private unsubscribe$ = new Subject<void>();

  cols: number = 3;

  products: Array<Product> | undefined;
  sort:string= 'desc';
  count: number = 100;
  productsSubription: Subscription | undefined;

  newManufacturer: string = 'all';
  category: string | undefined ='all';


  constructor(private productsService: ProductsService, private CartService: CartService, private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.category = this.route.snapshot.paramMap.get('myParameter')!;


    this.getProducts();




  }


  addToCart(obj: Product): void {


    this.CartService.addToCart({
      id: obj.id,
      manufacturer: obj.manufacturer,
      model: obj.model,
      quantity: 1,
      price: obj.price,
      image: obj.image,
      category: obj.category,
      description: obj.description,
      info1: obj.info1,
      info2: obj.info2,
      info3: obj.info3,
      info4: obj.info4,
      info5: obj.info5,
      info6: obj.info6
    })


  }



  getProducts(minPrice: number = 0, maxPrice:number = 10000): void {
    this.productsService.getProducts(this.count, this.sort, this.newManufacturer, this.category!, minPrice, maxPrice).subscribe((_products: Products) => {
      this.products = _products.products;
    });
  }

  onReset()
  {

    this.count = 100;
    this.newManufacturer = 'all';
    this.category = 'all';
    this.sort = 'desc';
    this.cols = 3;
    this.getProducts();

  }

  onShowCategory(newCategory:string)
  {
    this.category$ = new Observable<string>((observer) => {
      observer.next(newCategory);
      observer.complete();
    }).pipe(
      takeUntil(this.unsubscribe$)
    );

    this.category = newCategory[0];
    this.getProducts();
  }



  onPriceRangeChange(priceRange: { minPrice: number, maxPrice: number }): void
  {

    this.getProducts(priceRange.minPrice, priceRange.maxPrice)
  }

  onColumsCountChange(colsNum:number):void
  {

    this.cols = colsNum;


  }


  onSortCountChange(newSort:string): void
  {
    this.sort = newSort;
    this.getProducts();
  }
  onItemsCountChange(newCount: number): void {
    this.count = newCount;
    this.getProducts();
  }

  onShowManufacturer(newManufacturer: string): void
  {
    this.manufacturer$ = new Observable<string>((observer) => {
      observer.next(newManufacturer);
      observer.complete();
    }).pipe(
      takeUntil(this.unsubscribe$)
    );

    this.newManufacturer = newManufacturer;
    this.getProducts();

  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    if (this.productsSubription)
    { this.productsSubription.unsubscribe(); }

  }


}
