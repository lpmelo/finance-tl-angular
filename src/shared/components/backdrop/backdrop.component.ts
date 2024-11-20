import { Component, Input } from '@angular/core';

@Component({
    selector: 'backdrop',
    templateUrl: './backdrop.component.html',
    styleUrl: './backdrop.component.scss',
    standalone: false
})
export class BackdropComponent {
  @Input({ alias: 'class' }) customClass!: string;

  returnBackdropClass() {
    return `backdrop ${this.customClass}`;
  }
}
