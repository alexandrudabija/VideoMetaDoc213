import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { TestAll } from '../models/test.model';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  testResults = new BehaviorSubject<TestAll>({ result: [] });

  constructor(
    private snackBar: MatSnackBar,
    private translate: TranslateService
  ) { }

  sendResult(obj: any)
{

    this.testResults.next({ result: obj })
    this.snackBar.open(this.translate.instant('The test result has been sent.'), 'OK', { duration: 3000 });

}

}
