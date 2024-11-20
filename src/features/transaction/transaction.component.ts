import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    standalone: false
})
export class TransactionComponent implements OnInit {
  router = inject(Router);
  editMode = false;
  transactionForm: FormGroup = transactionFormInitialState;

  ngOnInit(): void {
    this.editMode = this.router.url.includes('/edit');
  }

  returnTitle() {
    if (this.editMode) {
      return 'Editar transação';
    }
    return 'Nova transação';
  }
}
