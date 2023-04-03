import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class RequestCallService {

  constructor(
    private snackBar: MatSnackBar,
    private translate: TranslateService
  ) {}
  requestcall(personalData:{name:string,phone:string}):void
  {
    this.snackBar.open(this.translate.instant('Call request sent .'), 'OK', { duration: 3000 });
    console.log(personalData);

  }



}
