import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: 'app-ourServices',
  templateUrl: './ourServices.component.html',
  styleUrls: ['./ourServices.component.less'],
  encapsulation: ViewEncapsulation.None,

})
export class OurServices implements AfterViewInit {

  // ngAfterViewInit() {
  //   const tl = gsap.timeline();
  //   tl.from('.first', { opacity: 0, duration: 1 });
  //   tl.to('.last', { opacity: 1, duration: 1 });
  //   tl.play();
  // }

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


  readonly ourServices:string='We perform video system installations or alarms at any type of location. Houses, villas, businesses, warehouses, shops, restaurants, orchards, lakes, guesthouses, etc. We install everything on a turnkey basis. We work with any type of video surveillance equipment you want, regardless of where you will purchase it. We offer support in choosing the most suitable system for your needs. Guarantee on the work performed and high quality accessories.'
  readonly arraySolutions:Array<{id:number,name:string,img:string}> =[
    {

  id:1,
  name:"Private Houses",

  img:"./assets/images/solutions/s1.jpg"

  }

  ,


  {

    id:2,
    name:"Residential blocks, parking lots",
    img:"./assets/images/solutions/s2.jpg"

    }


    ,  {

      id:3,
      name:"Hotels and Restaurants",
      img:"./assets/images/solutions/s3.jpg"
      }



,

      {

        id:4,
        name:"Chains of Stores",

        img:"./assets/images/solutions/s4.jpg"
        }

        ,


        {

          id:5,
          name:"Refueling Stations",
          img:"./assets/images/solutions/s5.jpg"

          }


          ,  {

            id:6,
            name:"Offices, educational institutions",
            img:"./assets/images/solutions/s6.jpg"
            }
,

            {

              id:7,
              name:"Banks, Companies",
              img:"./assets/images/solutions/s7.jpg"

              }


              ,  {

                id:8,
                name:"Medical institutions",
                img:"./assets/images/solutions/s8.jpg"
                }





  ];
}
