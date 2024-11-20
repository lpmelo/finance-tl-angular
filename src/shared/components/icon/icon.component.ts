import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input({ alias: 'font-icon', required: true }) fontIcon!: string;
  @Input({ alias: 'class' }) class!: string;
  @Input({ alias: 'tooltip' }) tooltip!: string;
}
