import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TOptions } from '../../shared/components/select-field/select-field.component';
import {
  PostTransactionPayloadI,
  TransactionParamsResponseI,
  TransactionService,
} from '../../core/transaction-service/transaction.service';
import { selectLayoutIsMobileDevice } from '../../store/layout-reducer/layout.selectors';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { openToast } from '../../shared/helpers/functions';
import { selectUserData } from '../../store/settings-reducer/settings.selectors';

type DescriptionMatchT = {
  [key: string]: string;
};

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss',
})
export class TransactionComponent implements OnInit, OnDestroy {
  private _snackBar = inject(MatSnackBar);
  router = inject(Router);
  location = inject(Location);

  store = inject(Store);
  $isMobile = this.store.selectSignal(selectLayoutIsMobileDevice);
  $userData = this.store.selectSignal(selectUserData);

  transactionService = inject(TransactionService);
  editMode = false;
  transactionForm: FormGroup = new FormGroup({
    type: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    value: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    plotNumber: new FormControl('', []),
    recurrence: new FormControl(false, []),
  });

  typeOptions: Array<TOptions> = [];
  genderOptions: Array<TOptions> = [];

  postLoading = false;

  ngOnInit(): void {
    this.onChangeGender();
    this.editMode = this.router.url.includes('/edit');
    this.retrieveTransactionParams();
  }

  ngOnDestroy(): void {
    this.transactionForm.reset();
  }

  onChangeGender() {
    this.transactionForm.controls['gender'].valueChanges.subscribe((value) => {
      if (value === 1) {
        this.transactionForm.controls['plotNumber'].setValidators([
          Validators.required,
          this.positiveNumberValidator,
        ]);
        this.transactionForm.controls['recurrence'].setValue(true);
      } else {
        this.transactionForm.controls['plotNumber'].clearValidators();
        this.transactionForm.controls['plotNumber'].reset();
      }
      this.transactionForm.controls['plotNumber'].updateValueAndValidity();
    });
  }

  positiveNumberValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value === null || value === '') {
      return null;
    }

    if (isNaN(value) || value <= 0) {
      return { notPositive: 'O valor deve ser um número positivo!' };
    }

    return null;
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
      exit: 'Saída',
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

  handleClickCancel() {
    this.location.back();
  }

  async handleClickSubmit() {
    if (this.transactionForm.valid) {
      let payload: PostTransactionPayloadI = {
        date: `${this.transactionForm
          .get('date')
          ?.value.format('YYYY-MM-DD')} 00:00:00`,
        description: this.transactionForm.get('description')?.value,
        id_gender_fk: this.transactionForm.get('gender')?.value,
        id_type_fk: this.transactionForm.get('type')?.value,
        id_user_fk: this.$userData().id_user_pk,
        recurrence: this.transactionForm.get('recurrence')?.value,
        value: this.transactionForm.get('value')?.value,
      };

      if (this.transactionForm.get('plotNumber')?.value) {
        payload = {
          ...payload,
          plot_total: this.transactionForm.get('plotNumber')?.value,
        };
      }

      this.postLoading = true;
      await this.transactionService
        .postTransacton(payload)
        .then((res) => {
          openToast(this._snackBar, 'success', 'Transação cadastrada com sucesso!', 2500);
          this.location.back();
        })
        .catch((err) => {
          if (err?.error?.error) {
            openToast(this._snackBar, 'error', err.error.error, 2500);
          }
        });
      this.postLoading = false;
    } else {
      this.transactionForm.markAllAsTouched();
      openToast(this._snackBar, 'error', 'Preencha os campos corretamente!', 2500);
    }
  }
}
