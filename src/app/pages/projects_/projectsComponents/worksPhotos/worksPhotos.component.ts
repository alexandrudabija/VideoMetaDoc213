import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-worksPhotos',
  templateUrl: './worksPhotos.component.html',
  styleUrls: ['./worksPhotos.component.less']
})
export class WorksPhotosComponent implements AfterViewInit {

  ngAfterViewInit() {
    const staggerAnimation = gsap.timeline();

    staggerAnimation
      .from('.element', {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.2 // the time between each element appearing
      });
  }



 readonly galleryImg: Array<{ id: number, img: string }> = [


    {

      id: 1,
      img: './assets/images/gallery/v5.jpg'


    }

    ,
    {

      id: 2,
      img: './assets/images/gallery/v4.jpg'


    }

    ,

    {

      id: 3,
      img: './assets/images/gallery/v3.jpg'


    }






  ]

}
