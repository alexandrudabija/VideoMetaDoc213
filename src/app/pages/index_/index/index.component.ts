import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {


    const myParameter: string| null = this.route.snapshot.paramMap.get('myParameter');


    if (myParameter) {




      this.reicevedValue(myParameter);
    }

  }


  reicevedValue(nameid: string):void {


    setTimeout(() => {

      const section = document.getElementById(nameid);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        });
      }

    });
    // In this code, the scrollIntoView() method is wrapped inside a setTimeout()
    //  method with a delay of 0 milliseconds. This effectively pushes the scrolling
    //  behavior to the end of the event queue,
    // ensuring that it is executed after the view has finished rendering.

  }
}
