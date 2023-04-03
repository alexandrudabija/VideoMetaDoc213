import { Component ,OnInit,OnDestroy} from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay, EffectCube } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCube, EffectFade, Autoplay, ])
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy {

  hiddenWord: string = '';
  currentIndex: number = 0;
  cursor: string = '|';
  showCursor: boolean = true;
  revealWordInterval: any;
  deleteWordInterval: any;
  restartInterval: any;


  ngOnInit(): void {
    this.revealWord();
  }

  arrayHeader: Array<{ img: string, title: string, title2?: string }> = [

    {
      img: './assets/images/indexImg/girl.jpg',
      title: 'Your trusted partner in video security',
      title2: 'Free Consultation'


    }
    ,
    {


      img: './assets/images/indexImg/index.jpg',
      title: ''

    },

    {

      img: './assets/images/indexImg/index2.jpg',
      title: ''


    }





  ]



  config: SwiperOptions = {
    effect: 'creative',
    creativeEffect: {
      prev: {
        // apply previous slide custom css
        translate: [0, -100, -300],
        rotate: [0, 0, -90],
        opacity: 0,
        scale: 0.2,
      },
      next: {
        // apply next slide custom css
        translate: [0, 100, -300],
        rotate: [0, 0, 90],
        opacity: 0,
        scale: 0.2,
      },
    },
    loop: true,
    autoplay: {
      delay: 9000,
      disableOnInteraction: false,
    },
  };








  revealWord(): void {

    this.revealWordInterval = setInterval(() => {


      if (this.currentIndex === this.arrayHeader[0].title.length) {
        clearInterval(this.revealWordInterval);
        this.showCursor = false;

        this.deleteWordInterval = setTimeout(() => {
          this.showCursor = true;
          this.deleteWord();
        }, 4000);


      }

      else {
        this.hiddenWord += this.arrayHeader[0].title.charAt(this.currentIndex);
        this.currentIndex++;
      }



    }, 200);
  }



  deleteWord(): void {

    const deleteWordInterval = setInterval(() => {
      if (this.hiddenWord.length === 0) {
        this.showCursor = false;

        clearInterval(deleteWordInterval);

        this.restartInterval = setTimeout(() => {
          this.restartAnimation();

          this.showCursor = true;

        }, 3800);
      } else {
        this.hiddenWord = this.hiddenWord.slice(0, -1);
      }
    }, 50);
    this.moveCursorBackward();
  }

  moveCursorBackward(): void {
    const cursorIntervalId = setInterval(() => {
      this.cursor = this.cursor.slice(0, -1);
      if (this.cursor.length === 0) {
        clearInterval(cursorIntervalId);
        this.cursor = '|';

      }
    }, 50);
  }

  restartAnimation(): void {
    clearInterval(this.deleteWordInterval);
    clearTimeout(this.restartInterval);
    clearInterval(this.revealWordInterval);
    this.currentIndex = 0;
    this.hiddenWord = '';
    this.showCursor = true;
    this.revealWord();

  }



  ngOnDestroy(): void {
    clearInterval(this.deleteWordInterval);
    clearTimeout(this.restartInterval);
    clearInterval(this.revealWordInterval);
    this.currentIndex = 0;
    this.hiddenWord = '';
    this.showCursor = true;
  }



}
