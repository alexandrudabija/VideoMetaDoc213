import {  Component ,AfterViewInit} from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements AfterViewInit  {
 readonly  projectDescriptions: string = 'We use high quality equipment and offer support to help you choose the right system for your needs. We also offer maintenance and repair services for systems installed by us';

  ngAfterViewInit() {
    const staggerAnimation = gsap.timeline();

    staggerAnimation
      .from('.item', {
        y: -500,
        opacity: 0,
        duration: 2,
        ease: 'power2.out'
      });

  }


}
