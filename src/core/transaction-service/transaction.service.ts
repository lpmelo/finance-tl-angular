import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUserData } from '../../store/settings-reducer/settings.selectors';

type TransactionParamT = {
  category: string;
  description: string;
  id_transaction_param_pk: number;
};
export interface TransactionParamsResponseI {
  data?: Array<TransactionParamT> | [];
}

export interface PostTransactionPayloadI {
  description: string;
  value: number;
  date: string;
  id_user_fk: number | null;
  id_gender_fk: number;
  id_type_fk: number;
  recurrence: boolean;
  plot_total?: number | null;
}

export interface GetUserBalanceResponseI {
  balance: number;
  entries_balance: number;
  exits_balance: number;
}

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  store = inject(Store);
  $userData = this.store.selectSignal(selectUserData);
  apiTransactionParamsUrl = `${environment.apiBaseUrl}/transaction-params`;
  apiTransactionsUrl = `${environment.apiBaseUrl}/transactions`;

  constructor(private http: HttpClient) {}

  async getAllTransactionGenders() {
    const request = this.http
      .get(`${this.apiTransactionParamsUrl}/genders`)
      .pipe(take(1));

    return await lastValueFrom(request);
  }

  async getAllTransactionTypes() {
    const request = this.http
      .get(`${this.apiTransactionParamsUrl}/types`)
      .pipe(take(1));

    return await lastValueFrom(request);
  }

  async retrieveMonthTransaction(dateRef: string) {
    const request = this.http
      .post(`${this.apiTransactionsUrl}/month/user`, {
        id_user_fk: this.$userData().id_user_pk,
        date_ref: dateRef,
      })
      .pipe(take(1));

    return await lastValueFrom(request);
  }

  async postTransacton(payload: PostTransactionPayloadI) {
    const request = this.http
      .post(`${this.apiTransactionsUrl}/create`, payload)
      .pipe(take(1));

    return await lastValueFrom(request);
  }

  async getUserBalance(dateRef: string) {
    const request = this.http
      .get(
        `${this.apiTransactionsUrl}/user/${
          this.$userData().id_user_pk
        }/balance/${dateRef}`
      )
      .pipe(take(1));

    return await lastValueFrom(request);
  }
}
