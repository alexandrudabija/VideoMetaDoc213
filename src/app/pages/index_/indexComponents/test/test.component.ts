import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { TestService } from 'src/app/services/test.service';
import { TestAll } from 'src/app/models/test.model';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less'],
})
export class TestComponent implements OnInit {
  currentQuestionIndex: number = 0;
  testQuestions!: FormGroup;
  testResults = new BehaviorSubject<TestAll>({ result: [] });
  testShow: boolean = false;
  checked: any = [];
  sendResult: boolean = false;

  constructor(private FormBuilder: FormBuilder, private TestService: TestService) { }

  ngOnInit(): void {
    this.testQuestions = this.FormBuilder.group({
      answer: [null, [Validators.required, Validators.min(1)]],

      personalData: this.FormBuilder.group({
        name: ['', Validators.required],
        phone: [null, [Validators.required, Validators.pattern('[- +()0-9]{9,12}')], ],
        location: ['', Validators.required],
      }),
    });
  }




  get isAnswerValid(): boolean {
    return this.testQuestions.get('answer')?.valid ?? false;
  }
  get isPhoneInvalid() {
    return this.testQuestions.get('personalData.phone');
  }

  get isLocationInvalid() {
    return this.testQuestions.get('personalData.location');
  }
  get isNameInvalid() {
    return this.testQuestions.get('personalData.name');
}

  testInit(): void {
    this.testShow = true;
  }



  onNext(): void {
    this.addAnswerToTest();
    if (this.currentQuestionIndex < this.questionsArray.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.currentQuestionIndex++;
    }
  }

  onBack(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;

    }
  }

  addAnswerToTest(): void {
    const verify = [...this.testResults.value.result];
    const exist :any= verify.find(
      (obj: any ) =>
        obj.question === this.questionsArray[this.currentQuestionIndex].question
    );

    if (exist) {
      exist.answer = this.testQuestions.value.answer;

      this.testResults.next({ result: verify });

      this.checked[this.currentQuestionIndex] = this.testQuestions.value.answer;
    } else {
      const currentAnswer = {
        question: this.questionsArray[this.currentQuestionIndex].question,
        answer: this.testQuestions.value.answer,
      };

      const result = [...this.testResults.value.result, currentAnswer];

      this.testResults.next({ result: result });
      this.checked = [...this.checked, this.testQuestions.value.answer];

    }
    this.testQuestions.value.answer = 'not selected';
    // this.testQuestions.value.answer = null;

  }

  finishTest(): void {
    const result:any = [
      ...this.testResults.value.result,
      this.testQuestions.value.personalData,
    ];

    // this.testResults.next({ result: result });
    this.TestService.sendResult(result)
    this.currentQuestionIndex++;
  }



  readonly questionsArray: Array<{ question: string, answers: Array<{ answer: string }> }> = [
    {
      question: 'De câte camere aveți necesitate?',

      answers: [
        {
          answer: '1',
        },

        {
          answer: '4',
        },

        {
          answer: '5',
        },

        {
          answer: '8+',
        },

        {
          answer: 'Nu știu, am nevoie de o consultație',
        },
      ],
    },
    {
      question: 'Pentru cati metri patrati aveti nevoie  ?',

      answers: [
        {
          answer: '24m3',
        },

        {
          answer: '10m3',
        },

        {
          answer: '15m3',
        },

        {
          answer: '20m3',
        },

        {
          answer: 'Nu știu, am nevoie de o consultație',
        },
      ],
    },

    {
      question: 'Ce model de camera   ?',

      answers: [
        {
          answer: 'samz',
        },

        {
          answer: 'Zara',
        },

        {
          answer: 'Yama',
        },

        {
          answer: 'hekinson',
        },

        {
          answer: 'Nu știu, am nevoie de o consultație',
        },
      ],
    },
  ];
}
