import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent {
  @Input() label: string | undefined;
  @Input() placeholder: string | undefined;
  @Input() type: string | undefined;
  @Input() class: string = 'full-width';
  @Input() errorMessage?: string;
  @Input('control') formControl!: AbstractControl;

  convertToFormControl(abstractControl: AbstractControl) {
    const control = abstractControl as FormControl;
    return control;
  }
}
