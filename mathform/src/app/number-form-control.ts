import { FormControl } from '@angular/forms';

export class NumberFormControl extends FormControl {
  callSuper(value: string, options: any) {
    super.setValue(value, { ...options, emitModelToViewChange: true });
  }

  setValue(value: string | null, options: any) {
    if (!value) {
      this.callSuper('', options);
      return;
    }

    if (!value.match(/^[0-9]*$/)) {
      this.callSuper(this.value, options);
      return;
    }

    this.callSuper(value, options);
  }
}
