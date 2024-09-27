import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardComponent } from './components/card/card.component';
import { RadioContainerComponent } from './components/radio-container/radio-container.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { UpperBarComponent } from './components/upper-bar/upper-bar.component';
import { BackdropComponent } from './components/backdrop/backdrop.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ComponentsModule],
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
  ],
})
export class SharedModule {}
