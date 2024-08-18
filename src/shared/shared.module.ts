import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ComponentsModule],
  exports: [
    InputFieldComponent,
    ButtonComponent,
    IconComponent,
    AppBarComponent,
    CardComponent,
  ],
})
export class SharedModule {}
