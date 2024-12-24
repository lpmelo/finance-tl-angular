import { Component, inject, OnInit, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserData } from '../../store/settings-reducer/settings.selectors';
import { UserDataJwtPayload } from '../../store/settings-reducer/settings.reducer';
import { selectLayoutIsMobileDevice } from '../../store/layout-reducer/layout.selectors';
import { ButtonListT } from './components/fab-slider/fab-slider.component';
import { Router } from '@angular/router';
import {
  GetUserBalanceResponseI,
  TransactionService,
} from '../../core/transaction-service/transaction.service';
import moment from 'moment';

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
export class HomeComponent implements OnInit {
  router = inject(Router);
  store = inject(Store);
  transactionService = inject(TransactionService);

  $userData: Signal<UserDataJwtPayload> =
    this.store.selectSignal(selectUserData);
  $isMobile = this.store.selectSignal(selectLayoutIsMobileDevice);

  fabButtonList: ButtonListT = [
    { icon: 'add', onClick: (e: MouseEvent) => this.handleClickAddButton(e) },
  ];

  lastTransactions: Array<TransactionsI> = [];
  userBalance = 0;
  userEntriesBalance = 0;
  userExitsBalance = 0;

  ngOnInit(): void {
    this.onChangeUserData();
  }

  onChangeUserData() {
    const actualMonth = moment().format('YYYY-MM-01');
    this.store.select(selectUserData).subscribe((userData) => {
      if (userData.id_user_pk) {
        this.getUserTransactionData(actualMonth);
      }
    });
  }

  async getUserTransactionData(actualMonth: string) {
    await this.transactionService
      .retrieveMonthTransaction(actualMonth)
      .then((res) => {
        const response = res as Array<TransactionsI>;
        this.lastTransactions = response;
      })
      .catch((err) => {});

    await this.transactionService
      .getUserBalance(actualMonth)
      .then((res) => {
        const response = res as GetUserBalanceResponseI;
        this.userBalance = response.balance;
        this.userEntriesBalance = response.entries_balance;
        this.userExitsBalance = response.exits_balance;
      })
      .catch((err) => {});
  }

  handleClickAddButton(e: MouseEvent) {
    this.router.navigateByUrl('/transaction/new');
  }
}
