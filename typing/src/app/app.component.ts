import { Component, OnChanges } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';

  onInput(value: string): void {
    this.enteredText = value;
  }

  compare(randomLetter: string, enteredLetter: string): string {
    if (!enteredLetter) {
      return 'has-text-gray';
    }

    return randomLetter === enteredLetter
      ? 'has-text-success'
      : 'has-text-danger has-text-weight-semibold';
  }
}
