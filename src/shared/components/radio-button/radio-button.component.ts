import { Component, Input } from '@angular/core';

@Component({
  selector: 'radio-button',
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
})
export class RadioButtonComponent {
  @Input({ alias: 'value' }) value!: string | number;
  @Input({ alias: 'label' }) label!: string;
}
