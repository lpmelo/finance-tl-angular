import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
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
}
