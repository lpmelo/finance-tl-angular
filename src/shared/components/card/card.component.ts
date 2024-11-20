import { Component, Input } from '@angular/core';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    standalone: false
})
export class CardComponent {
  @Input({ alias: 'class' }) class!: string;
}
