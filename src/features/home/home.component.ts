import { Component } from '@angular/core';

export type TransactionType = 'exit' | 'entrie';
export type TransactionGender = 'payment' | 'food' | 'plot';

export interface TransactionsI {
  type: TransactionType;
  value: number;
  gender: TransactionGender;
  date: string;
  plotDetail?: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  lastTransactions: Array<TransactionsI> = [
    {
      type: 'entrie',
      value: 180000,
      description: 'Pagamento mensal derivado de um trabalho bem intenso e difícil',
      date: '2024-08-14 16:35:31',
      gender: 'payment',
    },
    {
      type: 'entrie',
      value: 2500,
      description: 'Pagamento mensal',
      date: '2024-08-13 16:35:31',
      gender: 'payment',
    },
    {
      type: 'entrie',
      value: 2500,
      description: 'Pagamento mensal',
      date: '2024-08-12 16:35:31',
      gender: 'payment',
    },
    {
      type: 'entrie',
      value: 2500,
      description: 'Pagamento mensal',
      date: '2024-08-13 16:35:31',
      gender: 'payment',
    },
    {
      type: 'exit',
      value: -130.23,
      description: 'Pagar vidinha',
      date: '2024-08-11 16:35:31',
      gender: 'payment',
    },
    {
      type: 'exit',
      value: -85.42,
      description: 'Oficina da Pizza',
      date: '2024-08-11 16:35:31',
      gender: 'food',
    },
    {
      type: 'exit',
      value: -255.74,
      description: 'Kanzem',
      date: '2024-08-11 16:35:31',
      gender: 'food',
    },
    {
      type: 'exit',
      value: -80.23,
      gender: 'plot',
      date: '2024-08-13 16:35:31',
      plotDetail: '5/12',
      description: 'Jogos Switch 5/12',
    },
  ];
}
