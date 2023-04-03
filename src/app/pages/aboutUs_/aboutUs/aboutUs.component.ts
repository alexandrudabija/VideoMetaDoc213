import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-aboutUs',
  templateUrl: './aboutUs.component.html',
  styleUrls: ['./aboutUs.component.less']
})
export class AboutUsComponent implements AfterViewInit {
  readonly descriptionAboutUs:string='We are a team of technicians authorized to install video surveillance systems. With 6 years of experience in the field of security, complete key installation services for any type of location including houses, villas, businesses, shops, stores, restaurant, orchards, lakes and guesthouses. We use high quality equipment and offer support to help you choose the right system for your needs. They also provide maintenance and repair services for systems installed by us. Our warranty includes both labor and accessories to benefit you and keep you running smoothly. We are kind, honest and responsible, we are always ready to help you. We offer 24/7 support for any questions or issues you may have. Contact us today to discuss your video surveillance needs and get a custom quote.'

readonly arrayBenefices:Array<{id: number; title: string; img: string; text: string;}> =[


{

  id:1,
  title:"Rapidity",
  img:"./assets/images/benefices/express-delivery.png"
  , text: "Speed ​​and mobility - Fast installation"
  }


  ,

  {

id:2,
title:"Free Trial",

img:"./assets/images/benefices/home.png"
, text: "Risk Free Experience - Free Trial"
}

,


  {

    id:3,
    title:"Guarantee",
    img:"./assets/images/benefices/check.png"
, text: "Extended Warranty - Up to 36 Months Coverage"
    }


]


  ngAfterViewInit() {
    const staggerAnimation = gsap.timeline();

staggerAnimation
      .from('.item', {
        y: -500,
        opacity: 0,
        duration: 2,
        ease: 'power2.out'
      });

    staggerAnimation
      .from('.element', {
        opacity: 0,
        x: -50,
        skewY:12,
        duration: 1,
        stagger: 0.2 // the time between each element appearing
      });




  }



}
