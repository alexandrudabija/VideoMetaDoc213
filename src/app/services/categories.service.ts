import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  categories = new BehaviorSubject <{ cat: Array<{  title: string, image: string;}>}>(

   { cat: [
      {
      title: 'Video system'
      , image: './assets/images/categories/ca1.jpg'
    }
      ,
      {
        title: 'Alarm system'
        , image: './assets/images/categories/ca2.jpg'
      },
      {
        title: 'Fire fighting systems'
        , image: './assets/images/categories/ca3.jpg'
      },
      {
        title: 'Control acces'
        , image: './assets/images/categories/ca4.jpg'
      }

      ,
      {
        title: 'Intercom',
        image: './assets/images/categories/ca5.jpg'
      }
      ,
      {
        title: 'Network equipament'
        , image: './assets/images/categories/ca6.jpg'
      }

      ,
      {
        title: 'Cable and dasteners'
        , image: './assets/images/categories/ca7.jpg'
      }
      ,
      {
        title: 'Liquidation of stock'
        , image: './assets/images/categories/ca8.jpg'
      }


      ]}


  )



}
