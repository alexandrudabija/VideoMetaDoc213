import { Component } from '@angular/core';

@Component({
  selector: 'app-userCallOptions',
  templateUrl: './userCallOptions.component.html',
  styleUrls: ['./userCallOptions.component.less']
})
export class UserCallOptionsComponent {
  showCallOptions:boolean = false;

  toggleCallOptions(): void {
    this.showCallOptions = !this.showCallOptions;
  }


}
