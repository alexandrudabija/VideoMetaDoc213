import { AfterViewInit, Component } from '@angular/core';
import { Bounce, gsap } from 'gsap';
import { CustomBounce } from 'gsap/CustomBounce';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const staggerAnimation = gsap.timeline();

    staggerAnimation
      .from('.element', {
        y: -500,
        opacity: 0,
        duration: 2,
        ease: 'power2.out'
      });
  }

}
