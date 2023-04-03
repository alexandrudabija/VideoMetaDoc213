import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Products, Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  productsArray = new BehaviorSubject<Products>({
    products: [
      {
        id: 1,
        manufacturer: "Duhua",
        model: "100mgpx",
        quantity: 1,
        price: 1000,
        image: "./assets/images/products/c1.jpg",
        category:"Video system"
      },
      {
        id: 2,
        manufacturer: "Imou",
        model: "300mgpx",
        quantity: 1,
        price: 2000,
        image: "./assets/images/products/c2.jpg"
        ,
        category: "Video system"
      }
      ,
      {
        id: 3,
        manufacturer: "Ajax",
        model: "130mgpx",
        price: 8675,
        quantity: 1,
        image: "./assets/images/products/c3.jpg"
        ,
        category: "Video system"
      },

      {
        id: 4,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 3233,
        quantity: 1,
        image: "./assets/images/products/c4.jpg",

        category: "Video system"
      }
      ,

      {
        id: 5,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 3456,
        quantity: 1,
        image: "./assets/images/products/c5.jpg",
        category: "Video system"
      }
      ,


      {
        id: 5,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 3456,
        quantity: 1,
        image: "./assets/images/products/c5.jpg",
        category: "Video system"
      }
      ,

      {
        id: 5,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 3456,
        quantity: 1,
        image: "./assets/images/products/c5.jpg",
        category: "Video system"
      }
      ,

      {
        id: 5,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 3456,
        quantity: 1,
        image: "./assets/images/products/c5.jpg",
        category: "Video system"
      }
      ,

      {
        id: 5,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 3456,
        quantity: 1,
        image: "./assets/images/products/c5.jpg",
        category: "Video system"
      }
      ,

      {
        id: 5,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 3456,
        quantity: 1,
        image: "./assets/images/products/c5.jpg",
        category: "Video system"
      }
      ,

      {
        id: 5,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 3456,
        quantity: 1,
        image: "./assets/images/products/c5.jpg",
        category: "Video system"
      }
      ,

      {
        id: 5,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 3456,
        quantity: 1,
        image: "./assets/images/products/c5.jpg",
        category: "Video system"
      }
      ,
      {
        id: 6,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 3434,
        quantity: 1,
        image: "./assets/images/products/c6.jpg",

        category: "Video system"
      }
      ,

      {
        id: 8,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 12000,
        quantity: 1,
        image: "./assets/images/products/c7.jpg",

        category: "Liquidation of stock"
      }
      ,

      {
        id: 9,
        manufacturer: "Reolink",
        model: "20mgpx",
        price: 114,
        quantity: 1,
        image: "./assets/images/products/c8.jpg",
        category: "Video system"
      }

      ,

      {
        id: 10,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 12000,
        quantity: 1,
        image: "./assets/images/products/c7.jpg",

        category: "Liquidation of stock"
      }
      ,

      {
        id: 11,
        manufacturer: "Reolink",
        model: "20mgpx",
        price: 114,
        quantity: 1,
        image: "./assets/images/products/c8.jpg",
        category: "Control acces"
      }

      ,

      {
        id: 12,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 12000,
        quantity: 1,
        image: "./assets/images/products/c7.jpg",

        category: "Control acces"
      }
      ,

      {
        id: 13,
        manufacturer: "Reolink",
        model: "20mgpx",
        price: 114,
        quantity: 1,
        image: "./assets/images/products/c8.jpg",
        category: "Control acces"
      }

      ,

      {
        id: 14,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 12000,
        quantity: 1,
        image: "./assets/images/products/c7.jpg",

        category: "Control acces"
      }
      ,

      {
        id: 15,
        manufacturer: "Reolink",
        model: "20mgpx",
        price: 114,
        quantity: 1,
        image: "./assets/images/products/c8.jpg",
        category: "Fire fighting systems"
      }

      ,

      {
        id: 16,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 12000,
        quantity: 1,
        image: "./assets/images/products/c7.jpg",

        category: "Fire fighting systems"
      }
      ,

      {
        id: 17,
        manufacturer: "Reolink",
        model: "20mgpx",
        price: 114,
        quantity: 1,
        image: "./assets/images/products/c8.jpg",
        category: "Fire fighting systems"
      }

      ,

      {
        id: 18,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 12000,
        quantity: 1,
        image: "./assets/images/products/c7.jpg",

        category: "Liquidation of stock"
      }
      ,

      {
        id: 19,
        manufacturer: "Reolink",
        model: "20mgpx",
        price: 114,
        quantity: 1,
        image: "./assets/images/products/c8.jpg",
        category: "Cable and dasteners"
      }

      ,

      {
        id: 20,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 12000,
        quantity: 1,
        image: "./assets/images/products/c7.jpg",

        category: "Cable and dasteners"
      }
      ,

      {
        id: 21,
        manufacturer: "Reolink",
        model: "20mgpx",
        price: 114,
        quantity: 1,
        image: "./assets/images/products/c8.jpg",
        category: "Liquidation of stock"
      }

      ,

      {
        id: 22,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 12000,
        quantity: 1,
        image: "./assets/images/products/c7.jpg",

        category: "Network equipament"
      }
      ,

      {
        id: 23,
        manufacturer: "Reolink",
        model: "20mgpx",
        price: 114,
        quantity: 1,
        image: "./assets/images/products/c8.jpg",
        category: "Network equipament"
      }

      ,

      {
        id: 24,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 12000,
        quantity: 1,
        image: "./assets/images/products/c7.jpg",

        category: "Network equipament"
      }
      ,

      {
        id: 25,
        manufacturer: "Reolink",
        model: "20mgpx",
        price: 114,
        quantity: 1,
        image: "./assets/images/products/c8.jpg",
        category: "Network equipament"
      }

      ,

      {
        id: 26,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 12000,
        quantity: 1,
        image: "./assets/images/products/c7.jpg",

        category: "Liquidation of stock"
      }
      ,

      {
        id: 27,
        manufacturer: "Reolink",
        model: "20mgpx",
        price: 114,
        quantity: 1,
        image: "./assets/images/products/c8.jpg",
        category: "Alarm system"
      }

      ,

      {
        id: 28,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 12000,
        quantity: 1,
        image: "./assets/images/products/c7.jpg",

        category: "Network equipament"
      }
      ,

      {
        id: 29,
        manufacturer: "Reolink",
        model: "20mgpx",
        price: 114,
        quantity: 1,
        image: "./assets/images/products/c8.jpg",
        category: "Alarm system"
      }

      ,

      {
        id: 30,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 12000,
        quantity: 1,
        image: "./assets/images/products/c7.jpg",

        category: "Video system"
      }
      ,

      {
        id: 31,
        manufacturer: "Reolink",
        model: "20mgpx",
        price: 114,
        quantity: 1,
        image: "./assets/images/products/c8.jpg",
        category: "Alarm system"
      }

      ,

      {
        id: 32,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 12000,
        quantity: 1,
        image: "./assets/images/products/c7.jpg",

        category: "Liquidation of stock"
      }
      ,

      {
        id: 33,
        manufacturer: "Reolink",
        model: "20mgpx",
        price: 114,
        quantity: 1,
        image: "./assets/images/products/c8.jpg",
        category: "Video system"
      }

      ,

      {
        id: 34,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 12000,
        quantity: 1,
        image: "./assets/images/products/c7.jpg",

        category: "Liquidation of stock"
      }
      ,

      {
        id: 35,
        manufacturer: "Reolink",
        model: "20mgpx",
        price: 114,
        quantity: 1,
        image: "./assets/images/products/c8.jpg",
        category: "Control acces"
      }

      ,

      {
        id: 36,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 12000,
        quantity: 1,
        image: "./assets/images/products/c7.jpg",

        category: "Control acces"
      }
      ,

      {
        id: 37,
        manufacturer: "Reolink",
        model: "20mgpx",
        price: 114,
        quantity: 1,
        image: "./assets/images/products/c8.jpg",
        category: "Control acces"
      }

      ,

      {
        id: 38,
        manufacturer: "Reolink",
        model: "100mgpx",
        price: 12000,
        quantity: 1,
        image: "./assets/images/products/c7.jpg",

        category: "Cable and dasteners"
      }
      ,

      {
        id: 39,
        manufacturer: "Reolink",
        model: "20mgpx",
        price: 114,
        quantity: 1,
        image: "./assets/images/products/c8.jpg",
        category: "Intercom"
      },
   {
     id: 40,
     manufacturer: "Dohua",
        model: "100mgpx",
        price: 3456,
        quantity: 1,
        image: "./assets/images/products/c5.jpg",
        category: "Video system"
      }
      ,

      {
        id: 41,
        manufacturer: "Dohua",
        model: "100mgpx",
        price: 3456,
        quantity: 1,
        image: "./assets/images/products/c5.jpg",
        category: "Video system"
      }
      ,
      {
        id: 42,
        manufacturer: "Dohua",
        model: "100mgpx",
        price: 3456,
        quantity: 1,
        image: "./assets/images/products/c5.jpg",
        category: "Video system"
      }
      ,
      {
        id: 43,
        manufacturer: "Imou",
        model: "100mgpx",
        price: 3456,
        quantity: 1,
        image: "./assets/images/products/c5.jpg",
        category: "Video system"
      }
      ,
      {
        id: 44,
        manufacturer: "Dohua",
        model: "100mgpx",
        price: 3456,
        quantity: 1,
        image: "./assets/images/products/c5.jpg",
        category: "Video system"
      }
      ,

      {
        id: 44,
        manufacturer: "Dohua",
        model: "100mgpx",
        price: 3456,
        quantity: 1,
        image: "./assets/images/products/c5.jpg",
        category: "Video system"
      }
      ,
    ]
  });





  getProducts(limit: number, sortOrder: string, sortManufacturer: string,
    category: string, minPrice: number, maxPrice: number): Observable<Products> {


    let  sortedProducts = this.productsArray.value.products.slice();
    if (category !== 'all')
    { sortedProducts = sortedProducts.filter((product) => product.category === category); }



    if (sortOrder === 'asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    if ('all' !== sortManufacturer)
    {

      sortedProducts = sortedProducts.filter((product) => product.manufacturer === sortManufacturer);


    }
    sortedProducts = sortedProducts.filter((product) => product.price >= minPrice && product.price <= maxPrice);





    if (limit !== 100) {
      return of({ products: sortedProducts.slice(0, limit) });

    }

      return of({ products: sortedProducts});


  }


}
