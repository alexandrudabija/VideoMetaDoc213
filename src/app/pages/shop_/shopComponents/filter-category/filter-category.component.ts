import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-filter-category',
  templateUrl: './filter-category.component.html',
  styleUrls: ['./filter-category.component.less']
})
export class FilterCategoryComponent implements OnInit, AfterViewInit {


  categories$ = new Observable<{ cat: Array<{ title: string, image: string; }> }>
   constructor(private router: Router, private CategoriesService: CategoriesService) {}
  ngOnInit(): void {
    this.categories$ = this.CategoriesService.categories;


    // setTimeout(() => {
    // const section = document.getElementById('start');
    // if (section) {
    //   section.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'start',
    //     inline: 'nearest',
    //   });
    // }
    // });



  }

  ngAfterViewInit() {


    const rainAnimation = gsap.timeline();

    rainAnimation
      .from('.element', {
        y: -500,
        opacity: 0,
        duration: 2,
        ease: 'power2.out'
      });

  }




  onCategory(myParameter:string): void {


    // this.router.navigate(['page2'], { queryParams: { id: this.id } });

    this.router.navigate(['/shop', myParameter]);



  }

}
