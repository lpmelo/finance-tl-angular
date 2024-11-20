import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './input-field/input-field.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CardComponent } from './card/card.component';
import { RadioContainerComponent } from './radio-container/radio-container.component';
import { MatRadioModule } from '@angular/material/radio';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { MatTableModule } from '@angular/material/table';
import { UpperBarComponent } from './upper-bar/upper-bar.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { ToastComponent } from './toast/toast.component';
import {
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
} from '@angular/material/snack-bar';
import { GuardianComponent } from './guardian/guardian.component';
import { SelectFieldComponent } from './select-field/select-field.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    InputFieldComponent,
    ButtonComponent,
    IconComponent,
    SideBarComponent,
    CardComponent,
    RadioContainerComponent,
    RadioButtonComponent,
    DataGridComponent,
    UpperBarComponent,
    BackdropComponent,
    ToastComponent,
    GuardianComponent,
    SelectFieldComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatTooltipModule,
    MatRadioModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSnackBarLabel,
    MatSnackBarActions,
    MatSnackBarAction,
  ],
  exports: [
    InputFieldComponent,
    ButtonComponent,
    IconComponent,
    SideBarComponent,
    UpperBarComponent,
    CardComponent,
    RadioContainerComponent,
    RadioButtonComponent,
    DataGridComponent,
    BackdropComponent,
    ToastComponent,
    GuardianComponent,
    SelectFieldComponent,
  ],
})
export class ComponentsModule {}
