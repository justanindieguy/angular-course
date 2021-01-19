import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  height: number;
  miles: number;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 200,
  };

  onNameChange(value: string): void {
    this.name = value;
  }

  onDateChange(value: string): void {
    this.date = value;
  }

  private onNumberChange(value: string): number {
    const parsedValue = parseFloat(value);

    if (!isNaN(parsedValue)) {
      return parsedValue;
    }

    return 0;
  }

  onAmountChange(value: string): void {
    this.amount = this.onNumberChange(value);
  }

  onHeightChange(value: string): void {
    this.height = this.onNumberChange(value);
  }

  onMilesChange(value: string): void {
    this.miles = this.onNumberChange(value);
  }
}
