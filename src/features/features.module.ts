import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { FinancialCardComponent } from './home/components/financial-card/financial-card.component';
import { TransactionComponent } from './home/components/transaction/transaction.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    FinancialCardComponent,
    TransactionComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [LoginComponent],
})
export class FeaturesModule {}
