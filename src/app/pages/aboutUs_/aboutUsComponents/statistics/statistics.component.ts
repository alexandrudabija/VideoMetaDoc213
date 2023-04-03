import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.less']
})
export class StatisticsComponent {



  statisticsArray:Array<{id:number,name:string,img:string,value:number,percentage?:boolean}> = [
    {
      id: 1,
      name: 'Installations Made',
      img: './assets/images/statistics/st1.png',
      value: 1340

    },
    {
      id: 2,
      name: 'Customers',
      img: './assets/images/statistics/st2.png'
      , value: 1230
    }
    ,
    {
      id: 3,
      name: 'Customer retention rate',
      img: './assets/images/statistics/st3.png'
      ,
      value: 99,
      percentage: true

    },

    {
      id: 4,
      name: 'Success',
      img: './assets/images/statistics/st4.png'
      ,
      value: 99,
      percentage: true
    }
  ];



}
