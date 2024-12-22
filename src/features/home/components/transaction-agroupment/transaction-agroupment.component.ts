import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TransactionsI } from '../../home.component';
import moment from 'moment';

interface AgrouppedTransactionI {
  dateRef: string;
  dateFormatted: string;
  transactions: Array<TransactionsI>;
}

@Component({
  selector: 'transaction-agroupment',
  templateUrl: './transaction-agroupment.component.html',
  styleUrl: './transaction-agroupment.component.scss',
})
export class TransactionAgroupmentComponent implements OnChanges {
  @Input({ alias: 'transactions' }) transactions: Array<TransactionsI> = [];
  agrouppedTransactions: Array<AgrouppedTransactionI> = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.agroupTransactions();
  }

  agroupTransactions() {
    if (this.transactions.length) {
      let newTransactions: Array<AgrouppedTransactionI> = [];

      this.transactions.map((transaction) => {
        const completeDate = moment(transaction.date).format('YYYY-MM-DD');
        const dateValue = moment(transaction.date).format('DD MMM');
        const agroupmentIndex = newTransactions.findIndex(
          (item, index) => item.dateRef === completeDate
        );

        if (agroupmentIndex === -1) {
          newTransactions.push({
            dateRef: completeDate,
            dateFormatted: dateValue,
            transactions: [transaction],
          });
        } else {
          newTransactions[agroupmentIndex].transactions.push(transaction);
        }
      });

      this.agrouppedTransactions = newTransactions;
    }
  }

  convertDateToHours(dateString: string | undefined) {
    if (dateString) {
      return moment(dateString).format('HH:MM');
    }
    return '';
  }
}
