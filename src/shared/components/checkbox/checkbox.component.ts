import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'checkbox-field',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  @Input() label: string | undefined;
  @Input() type: string | undefined;
  @Input() class: string = 'full-width';
  @Input('control') formControl!: AbstractControl;
  @Input() disabled: boolean | undefined;

  convertToFormControl(abstractControl: AbstractControl) {
    const control = abstractControl as FormControl;
    return control;
  }
}
