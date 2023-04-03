import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';


@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.less'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class Test2Component implements OnInit ,OnDestroy {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }


  word:string = 'Contact Us, Ask Us, Request a Call';
  hiddenWord:string = '';
  currentIndex:number = 0;
  cursor:string = '|';
  showCursor: boolean = true;
  revealWordInterval: any;
  deleteWordInterval: any;
  restartInterval: any;


  ngOnInit(): void {
    this.revealWord();
  }

  revealWord(): void {
    this.revealWordInterval = setInterval(() => {


      if (this.currentIndex === this.word.length)

      {
        clearInterval(this.revealWordInterval);
        this.showCursor = false;

        this.deleteWordInterval = setTimeout(() => {
          this.showCursor = true;
          this.deleteWord();
        }, 4000);


      }

      else
      {
            this.hiddenWord += this.word.charAt(this.currentIndex);
            this.currentIndex++;
      }



    }, 200);
  }



  deleteWord(): void {

    const deleteWordInterval = setInterval(() => {
      if (this.hiddenWord.length === 0) {
        this.showCursor = false;

        clearInterval(deleteWordInterval);

        this.restartInterval = setTimeout(() => {
          this.restartAnimation();

          this.showCursor = true;

        }, 3800);
      } else {
        this.hiddenWord = this.hiddenWord.slice(0, -1);
      }
    }, 50);
    this.moveCursorBackward();
  }

  moveCursorBackward(): void {
    const cursorIntervalId = setInterval(() => {
      this.cursor = this.cursor.slice(0, -1);
      if (this.cursor.length === 0) {
        clearInterval(cursorIntervalId);
        this.cursor = '|';

      }
    }, 50);
  }

  restartAnimation():void {
    clearInterval(this.deleteWordInterval);
    clearTimeout(this.restartInterval);
    clearInterval(this.revealWordInterval);
    this.currentIndex = 0;
    this.hiddenWord = '';
    this.showCursor = true;
    this.revealWord();

  }



  ngOnDestroy(): void {
    clearInterval(this.deleteWordInterval);
    clearTimeout(this.restartInterval);
    clearInterval(this.revealWordInterval);
    this.currentIndex = 0;
    this.hiddenWord = '';
    this.showCursor = true;
  }


}



