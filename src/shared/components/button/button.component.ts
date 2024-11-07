import { Component, Input } from '@angular/core';

type ButtonTypeT = 'flat' | 'basic' | 'icon' | 'fab';
type TooltipPositionT =
  | 'above'
  | 'below'
  | 'left'
  | 'right'
  | 'before'
  | 'after';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ alias: 'label' }) buttonLabel: string | undefined;
  @Input({ alias: 'type' }) buttonType: ButtonTypeT = 'flat';
  @Input({ alias: 'class' }) class: string = 'full-width';
  @Input({ alias: 'tooltip' }) tooltip: string | undefined;
  @Input({ alias: 'tooltip-position' }) tooltipPosition: TooltipPositionT =
    'below';
  @Input({ alias: 'icon' }) icon!: string;
  @Input() disabled!: boolean;
  @Input() btnType!: string;
}
