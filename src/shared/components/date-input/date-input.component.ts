import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
    selector: 'app-date-input',
    templateUrl: './date-input.component.html',
    styleUrl: './date-input.component.scss',
    standalone: false
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
