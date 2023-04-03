import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from '../../../../models/product.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.less']
})
export class FiltersComponent implements OnInit ,OnDestroy{
  @Output() showManufacturer = new EventEmitter<string>();
  @Output() priceRange = new EventEmitter<{ minPrice: number, maxPrice: number }>();
  @Output() showCategory = new EventEmitter<string>();
  @Output() reset = new EventEmitter;
  minPrice: number | undefined;
  maxPrice: number | undefined;

  selectedCategory: string | undefined;
  selectedManufacturer: string | undefined;
  private unsubscribe$ = new Subject<void>()

  dataManufacturesCategories$ = new Observable<Products>

  manufacturers: string[] | undefined;
  categories: string[] | undefined;
  constructor(private productsService: ProductsService) { }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this.dataManufacturesCategories$ = this.productsService.productsArray
    this.dataManufacturesCategories$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: Products) => {
        this.manufacturers = data.products
          .map((product) => product.manufacturer)
          .filter((value, index, self) => self.indexOf(value) === index)

        this.categories = data.products
          .map((product) => product.category)
          .filter((value, index, self) => self.indexOf(value) === index)
      })

// In this code, the map() method is used to extract the values of the manufacturer and category properties
// from each product in the products array.Then, the filter() method is used to remove duplicate values from
// each array by keeping only the first occurrence of each value, using the indexOf() method to check whether
// the value has already been seen.Finally,
// the resulting arrays are assigned to the manufacturers and categories properties of the component.




  }

  formatLabel(value: number): string {
    if (value >= 10000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

  onPriceChange(): void
  {
    this.priceRange.emit({ minPrice: this.minPrice!, maxPrice: this.maxPrice! });
}

  onShowManufacturer(): void {
    if (this.selectedManufacturer) {
      this.showManufacturer.emit(this.selectedManufacturer[0]);
    }
  }
  onCategorySelected():void
  {
    if (this.selectedCategory) {
      this.showCategory.emit(this.selectedCategory);
    }

  }

  onReset(): void
  {



    this.reset.emit();
    this.selectedManufacturer = undefined;
    this.selectedCategory = undefined;
    this.minPrice = undefined;
    this.maxPrice = undefined;
}

}
