import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { CardComponent } from './components/card/card.component';
import { RadioContainerComponent } from './components/radio-container/radio-container.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ComponentsModule],
  exports: [
    InputFieldComponent,
    ButtonComponent,
    IconComponent,
    AppBarComponent,
    CardComponent,
    RadioContainerComponent,
    RadioButtonComponent,
    DataGridComponent
  ],
})
export class SharedModule {}
