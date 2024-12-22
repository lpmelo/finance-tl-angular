import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';

export const DATE_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'date-input',
  templateUrl: './date-input.component.html',
  styleUrl: './date-input.component.scss',
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    provideMomentDateAdapter(DATE_FORMAT),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() class: string = 'full-width';
  @Input('control') formControl!: AbstractControl;

  convertToFormControl(abstractControl: AbstractControl) {
    const control = abstractControl as FormControl;
    return control;
  }
}
