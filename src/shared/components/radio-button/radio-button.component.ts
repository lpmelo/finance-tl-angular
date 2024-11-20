import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
    selector: 'radio-button',
    templateUrl: './radio-button.component.html',
    styleUrl: './radio-button.component.scss',
    standalone: false
})
export class RadioButtonComponent {
  @Input({ alias: 'checked', transform: booleanAttribute }) checked!: boolean;
  @Input({ alias: 'value' }) value!: string | number;
  @Input({ alias: 'label' }) label!: string;
  @Input({ alias: 'tooltip' }) tooltip!: string;
}
