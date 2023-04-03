import { Component, Output, EventEmitter, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {

  isSmallScreen = window.innerWidth < 1000;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isSmallScreen = window.innerWidth < 1000;
  }

  @Output() scroll = new EventEmitter<string>();
  public selectedLanguage!: string;

  readonly languageArray: Array<{ language: string }> = [
    { language: 'ro' },
    { language: 'ru' },
    { language: 'it' },
    { language: 'en' },
    { language: 'fr' },
    { language: 'ar' },
    { language: 'ja' },
    { language: 'es' },
    { language: 'de' },
    { language: 'tr' },
    { language: 'uk' },
    { language: 'zh' },

  ]
  public showOptions: boolean = false;
  public showNavbar: boolean = false;
  public timeline = gsap.timeline({ paused: true });
  public tl = gsap.timeline();
  public bool:boolean = false;

  toggle(): void

  {
if(this.bool===false)
{
  gsap.to('.bar1', { duration: .2, width: '45px', height: '6px', top: '45%', left: '15%', rotate: '45deg' }),
    gsap.to('.bar2', { duration: .2, opacity: 0 }),
    gsap.to('.bar3', { duration: .2, width: '45px', height: '6px', top: '45%', left: '15%', rotate: '-45deg' });
  this.tl.to('.navBack', { duration: .5, width: '100%', ease: 'power2.in', height: '100vh' });

  this.tl.to('.bt', { duration: .5, opacity: 1, ease: 'power3.in', stagger: .15 });

  this.bool = true;

}

else
{
  gsap.to('.bar1', {
    duration: .2,
    width: '37px',
    height: '5px',
    top: '25%',
    left: '22%',
    rotate: '0deg'

  });


  gsap.to('.bar2', {
    duration: .2,
    width: '37px',
    height: '5px',
    top: '45%',
    left: '22%',
    opacity: 1
  });

  gsap.to('.bar3', {
    duration: .2,
    width: '37px',
    height: '5px',
    top: '65%',
    left: '22%',
    rotate: '0deg'
  });


  this.tl.to('.bt', { duration: .7, opacity: 0, ease: 'power3.out', stagger: .1 });
  this.tl.to('.navBack', { duration: .5, delay:.2,width: 0, ease: 'power2.out'  });

  this.bool = false;
  }


  }

  constructor(private translate: TranslateService, private Router: Router) { }

  ngOnInit(): void {




    const browserLang: string = this.translate.getBrowserLang() || 'en';
    this.translate.setDefaultLang(browserLang);
    this.selectedLanguage = browserLang;

  }

  toggleNavbar(): void
  {
    this.showNavbar = !this.showNavbar;
    const maxHeight = this.showNavbar ? "750px" : "0";
    gsap.to('.Navbar-container', { maxHeight: maxHeight, duration: 0.3 });
  }



  switchLanguage(selectedLanguage:string): void {


    this.selectedLanguage = selectedLanguage
    this.translate.use(selectedLanguage);



  }

  toggleOptions(): void {
    this.showOptions = !this.showOptions;
    const maxHeight = this.showOptions ? "750px" : "0";
    gsap.to('.options-container', { maxHeight: maxHeight, duration: 0.3 });
  }
  navToRoute(route:string):void
  {
    this.Router.navigate([`/${route}`]);

    if (this.isSmallScreen)
    {
      this.toggle();
      }

  }


// scrollTo(name:string):void
// {

//   if (name === "products") {
//     this.Router.navigate(['/category'])

//   }
//   else
//   {


//     const myParameter = name;
//     this.Router.navigate(['/index', myParameter]);




//     this.scroll.emit(name);





//   }

// }





}
