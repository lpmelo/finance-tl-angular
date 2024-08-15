import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
})
export class InputFieldComponent {
  @Input({ alias: 'label' }) label: string | undefined;
  @Input({ alias: 'placeholder' }) placeholder: string | undefined;
  @Input({ alias: 'type' }) type: string | undefined;
  @Input({ alias: 'class' }) class: string = 'full-width';
}
