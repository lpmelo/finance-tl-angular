import { Component, Input, numberAttribute } from '@angular/core';

@Component({
    selector: 'financial-card',
    templateUrl: './financial-card.component.html',
    styleUrl: './financial-card.component.scss',
    standalone: false
})
export class FinancialCardComponent {
  @Input({ alias: 'value', transform: numberAttribute }) value: number = 0;
  @Input({ alias: 'title' }) title!: string;

  returnFormattedValue() {
    let formattedValue = this.value.toString();
    if (formattedValue.includes('.')) {
      formattedValue = formattedValue.replace('.', ',');
    } else {
      formattedValue = `${formattedValue},00`;
    }
    return `R$ ${formattedValue}`;
  }
}
