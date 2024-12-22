import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TOptions } from '../../shared/components/select-field/select-field.component';
import {
  TransactionParamsResponseI,
  TransactionService,
} from '../../core/transaction-service/transaction.service';

type DescriptionMatchT = {
  [key: string]: string;
};

const transactionFormInitialState = new FormGroup({
  type: new FormControl('', [Validators.required]),
  gender: new FormControl('', [Validators.required]),
  description: new FormControl('', [Validators.required]),
  value: new FormControl('', [Validators.required]),
  date: new FormControl('', [Validators.required]),
  plotNumber: new FormControl('', []),
});

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss',
})
export class TransactionComponent implements OnInit, OnDestroy {
  router = inject(Router);
  transactionService = inject(TransactionService);
  editMode = false;
  transactionForm: FormGroup = transactionFormInitialState;

  typeOptions: Array<TOptions> = [];
  genderOptions: Array<TOptions> = [];

  ngOnInit(): void {
    this.editMode = this.router.url.includes('/edit');
    this.retrieveTransactionParams();
  }

  ngOnDestroy(): void {
    this.transactionForm.reset();
  }

  returnTitle() {
    if (this.editMode) {
      return 'Editar transação';
    }
    return 'Nova transação';
  }

  returnDescription(description: string) {
    const descriptionMatch: DescriptionMatchT = {
      plot: 'Parcela',
      payment: 'Pagamento',
      food: 'Comida',
      entrie: 'Entrada',
      exit: 'Saída'
    };

    const keys = Object.keys(descriptionMatch);

    if (keys.includes(description)) {
      return descriptionMatch[description];
    }

    return description;
  }

  async retrieveTransactionParams() {
    await this.transactionService.getAllTransactionGenders().then((res) => {
      const response = res as TransactionParamsResponseI;

      if (response.data?.length) {
        response.data.map((item) => {
          this.genderOptions.push({
            content: this.returnDescription(item.description),
            value: item.id_transaction_param_pk,
          });
        });
      }
    });

    await this.transactionService.getAllTransactionTypes().then((res) => {
      const response = res as TransactionParamsResponseI;

      if (response.data?.length) {
        response.data.map((item) => {
          this.typeOptions.push({
            content: this.returnDescription(item.description),
            value: item.id_transaction_param_pk,
          });
        });
      }
    });
  }
}
