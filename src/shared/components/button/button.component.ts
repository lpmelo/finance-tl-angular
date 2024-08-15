import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ alias: 'label' }) buttonLabel: string | undefined;
  @Input({ alias: 'type' }) buttonType: string = 'mat-flat-button';
  @Input({ alias: 'class' }) class: string = 'full-width';
}
