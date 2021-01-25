import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  callSuper(value: string, options: any) {
    super.setValue(value, { ...options, emitModelToViewChange: true });
  }

  setValue(value: string | null, options: any) {
    if (!value) {
      this.callSuper('', options);
      return;
    }

    if (value.match(/[^0-9|\/]/gi)) {
      this.callSuper(this.value, options);
      return;
    }

    if (value.length > 5) {
      this.callSuper(this.value, options);
      return;
    }

    if (value.length === 2 && this.value.length === 3) {
      this.callSuper(value, options);
      return;
    }

    if (value.length === 3 && this.value.length === 4) {
      this.callSuper(value.slice(0, 2), options);
      return;
    }

    if (value.length === 2) {
      this.callSuper(value + '/', options);
      return;
    }

    this.callSuper(value, options);
  }
}
