import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { delay, filter, scan } from 'rxjs/operators';
import { NumberFormControl } from '../number-form-control';
import { MathValidators } from '../math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css'],
})
export class EquationComponent implements OnInit {
  secondsPerSolution = 0;

  mathForm = new FormGroup(
    {
      firstValue: new FormControl(this.randomNumber()),
      secondValue: new FormControl(this.randomNumber()),
      answer: new NumberFormControl(''),
    },
    [MathValidators.addition('firstValue', 'secondValue', 'answer')]
  );

  constructor() {}

  get firstValue(): number {
    return this.mathForm.value.firstValue;
  }

  get secondValue(): number {
    return this.mathForm.value.secondValue;
  }

  ngOnInit(): void {
    this.mathForm.statusChanges
      .pipe(
        filter((value) => value === 'VALID'),
        delay(100),
        scan(
          (acc) => {
            return {
              numberSolved: acc.numberSolved + 1,
              startTime: acc.startTime,
            };
          },
          { numberSolved: 0, startTime: new Date() }
        )
      )
      .subscribe(({ numberSolved, startTime }) => {
        this.secondsPerSolution =
          (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;

        this.mathForm.setValue({
          firstValue: this.randomNumber(),
          secondValue: this.randomNumber(),
          answer: '',
        });
      });
  }

  randomNumber(): number {
    return Math.floor(Math.random() * 10);
  }
}
