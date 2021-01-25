import { FormControl } from '@angular/forms';

export class CardNumberFormControl extends FormControl {
  callSuper(value: string, options: any) {
    super.setValue(value, { ...options, emitModelToViewChange: true });
  }

  setValue(value: string | null, options: any) {
    if (!value) {
      this.callSuper('', options);
      return;
    }

    const parsedValue = value.split('-').join('');
    const thisParsedValue = this.value.split('-').join('');
    const occurrences = this.value.split('-').length - 1;
    const lowerLimit = 4 * occurrences + occurrences - 1;
    const upperLimit = lowerLimit + 1;
    const expectedLength = 4 * (occurrences + 1) + occurrences;

    if (value.match(/[^0-9|\-]/gi)) {
      this.callSuper(this.value, options);
      return;
    }

    if (value.length > 19) {
      this.callSuper(this.value, options);
      return;
    }

    if (value.length === lowerLimit && this.value.length === upperLimit) {
      this.callSuper(value, options);
      return;
    }

    if (
      thisParsedValue.length % 4 === 0 &&
      thisParsedValue.length > 0 &&
      parsedValue.length % 4 === 1 &&
      this.value[this.value.length - 1] !== '-'
    ) {
      this.callSuper(this.value + '-' + value[value.length - 1], options);
      return;
    }

    if (value.length === expectedLength && value.length < 19) {
      this.callSuper(value + '-', options);
      return;
    }

    this.callSuper(value, options);
  }
}
