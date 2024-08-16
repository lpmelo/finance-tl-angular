import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './input-field/input-field.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button/button.component';
import { FinancialCardComponent } from './financial-card/financial-card.component';
import { IconComponent } from './icon/icon.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    InputFieldComponent,
    ButtonComponent,
    FinancialCardComponent,
    IconComponent,
    AppBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatTooltipModule
  ],
  exports: [
    InputFieldComponent,
    ButtonComponent,
    FinancialCardComponent,
    IconComponent,
    AppBarComponent,
  ],
})
export class ComponentsModule {}
