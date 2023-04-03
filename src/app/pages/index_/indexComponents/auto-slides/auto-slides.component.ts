import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay ,EffectCube} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCube, EffectFade])
import { SwiperOptions } from 'swiper';


SwiperCore.use([Autoplay]); // import Autoplay here
@Component({
  selector: 'app-auto-slides',
  templateUrl: './auto-slides.component.html',
  styleUrls: ['./auto-slides.component.less'],
  encapsulation: ViewEncapsulation.None,

})

export class AutoSlidesComponent {
  slides :Array<{img:string,alt:string}> =  [
    {
      img: './assets/images/sliderBrand/Dahua.jpg',
      alt: 'Slide 1'
    },
    {
      img: './assets/images/sliderBrand/hikvision.jpg',
      alt: 'Slide 2'
    },
    {
      img: './assets/images/sliderBrand/Imou.png',
      alt: 'Slide 3'
    }
    ,
    {
      img: './assets/images/sliderBrand/reolink.png',
      alt: 'Slide 3'
    },
    {
      img: './assets/images/sliderBrand/Dahua.jpg',
      alt: 'Slide 4'
    },

  ];

  config: SwiperOptions = {
    autoplay: {
      delay: 4200, // milliseconds
      disableOnInteraction: false, // enable/disable autoplay on user interaction
    },
    breakpoints: {
      1000: {
        spaceBetween: 20,
        slidesPerView: 3,


      },
      600: {
        spaceBetween: 14,
        slidesPerView: 2,

      },

      0: {
        spaceBetween: 10,
        slidesPerView: 1,

      },
    },
  };

}
