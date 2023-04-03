import { Component, OnInit } from '@angular/core';
import { RequestCallService } from 'src/app/services/requestCall.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-requestCall',
  templateUrl:'./requestCall.component.html',
  styleUrls: ['./requestCall.component.less']
})
export class RequestCallComponent implements OnInit {

  showRequestCall: boolean = false;
  formCall!: FormGroup

  constructor(private RequestCallService: RequestCallService,private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.formCall = this.formBuilder.group({

      name: [null, [Validators.required, Validators.min(1)]],
      phone: [null, [Validators.required, Validators.pattern('[- +()0-9]{9,12}')]],
    });
  }
  onRequestCall():void
  {
    this.RequestCallService.requestcall(this.formCall.value);
    this.showRequestCall = false;
  }

  toggleRequestCall(): void {
    this.showRequestCall = !this.showRequestCall;
  }

  get getNameValid()
  {
    return this.formCall.get('name')
  }
  get getPhoneValid() {
    return this.formCall.get('phone')
  }

}
