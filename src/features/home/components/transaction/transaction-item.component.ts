import { Component, input, Input, numberAttribute } from '@angular/core';

type TransactionGendersT = {
  [key: string]: string;
};

@Component({
  selector: 'transaction',
  templateUrl: './transaction-item.component.html',
  styleUrl: './transaction-item.component.scss',
})
export class TransactionItemComponent {
  @Input({ alias: 'value', transform: numberAttribute }) value: number = 0;
  @Input({ alias: 'description' }) description!: string;
  @Input({ alias: 'date' }) date!: string;
  @Input({ alias: 'type' }) type: string = 'entrie';
  @Input({ alias: 'gender' }) gender: string = 'payment';

  returnTransactionIcon(transacionGender: string | undefined) {
    if (transacionGender) {
      const transactionGenders: TransactionGendersT = {
        payment: 'paid',
        food: 'fastfood',
        plot: 'credit_card_clock',
      };

      if (Object.keys(transactionGenders).includes(transacionGender)) {
        return transactionGenders[transacionGender];
      }
    }
    return 'paid';
  }

  returnTrasactionClass(value: number | undefined, type: string | undefined) {
    if (typeof type != undefined) {
      if (value) {
        if (value < 0) {
          return 'negative';
        }
        return 'positive';
      }
      return 'neutral';
    }
    return 'neutral';
  }

  returnFormattedValue(value: number | undefined) {
    if (value) {
      let valueString = value.toString();
      if (valueString.includes('.')) {
        return `R$ ${valueString.replace('.', ',')}`;
      }
      return `R$ ${valueString},00`;
    }
    return 'R$ 0,00';
  }
}
