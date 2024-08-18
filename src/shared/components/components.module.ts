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
import { IconComponent } from './icon/icon.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CardComponent } from './card/card.component';
import { RadioContainerComponent } from './radio-container/radio-container.component';
import { MatRadioModule } from '@angular/material/radio';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { DataGridComponent } from './data-grid/data-grid.component';

@NgModule({
  declarations: [
    InputFieldComponent,
    ButtonComponent,
    IconComponent,
    AppBarComponent,
    CardComponent,
    RadioContainerComponent,
    RadioButtonComponent,
    DataGridComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatTooltipModule,
    MatRadioModule,
  ],
  exports: [
    InputFieldComponent,
    ButtonComponent,
    IconComponent,
    AppBarComponent,
    CardComponent,
    RadioContainerComponent,
    RadioButtonComponent,
  ],
})
export class ComponentsModule {}
