import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { FinancialCardComponent } from './home/components/financial-card/financial-card.component';
import { TransactionComponent } from './home/components/transaction/transaction.component';
import { MatTooltip } from '@angular/material/tooltip';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './profile/components/details/details.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    FinancialCardComponent,
    TransactionComponent,
    ProfileComponent,
    DetailsComponent,
  ],
  imports: [CommonModule, SharedModule, MatTooltip],
  exports: [LoginComponent],
})
export class FeaturesModule {}
