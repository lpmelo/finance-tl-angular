import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  gridModel = { entrie: true, exit: false };
  lastTransactions = [
    {
      type: 'entrie',
      value: 2500,
      description: 'Pagamento mensal',
      date: '2024-08-13',
      gender: 'payment',
    },
    {
      type: 'exit',
      value: -130.23,
      description: 'Pagar vidinha',
      date: '2024-08-13',
      gender: 'payment',
    },
    {
      type: 'exit',
      value: -85.42,
      description: 'Oficina da Pizza',
      date: '2024-08-13',
      gender: 'food',
    },
    {
      type: 'exit',
      value: -255.74,
      description: 'Kanzem',
      date: '2024-08-13',
      gender: 'food',
    },
    {
      type: 'exit',
      value: -80.23,
      gender: 'plot',
      date: '2024-08-13',
      plotDetail: '5/12',
      description: 'Jogos Switch 5/12',
    },
  ];

  handleClickRadio(e: MouseEvent) {
    if (e.target) {
      const elementValue = (e.target as HTMLInputElement).value;
      if (elementValue === 'entrie') {
        return (this.gridModel = { entrie: true, exit: false });
      }
      return (this.gridModel = { entrie: false, exit: true });
    }
    return this.gridModel;
  }
}
