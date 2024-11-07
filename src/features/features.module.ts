import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { FinancialCardComponent } from './home/components/financial-card/financial-card.component';
import { TransactionComponent } from './home/components/transaction/transaction.component';
import { MatTooltip } from '@angular/material/tooltip';
import { TransactionAgroupmentComponent } from './home/components/transaction-agroupment/transaction-agroupment.component';
import { FabSliderComponent } from './home/components/fab-slider/fab-slider.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    FinancialCardComponent,
    TransactionComponent,
    TransactionAgroupmentComponent,
    FabSliderComponent,
  ],
  imports: [CommonModule, SharedModule, MatTooltip, ReactiveFormsModule],
  exports: [LoginComponent],
})
export class FeaturesModule {}
