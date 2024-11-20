import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'select-field',
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.scss',
})
export class SelectFieldComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() class: string = 'full-width';
  @Input('control') formControl!: AbstractControl;

  convertToFormControl(abstractControl: AbstractControl) {
    const control = abstractControl as FormControl;
    return control;
  }
}
