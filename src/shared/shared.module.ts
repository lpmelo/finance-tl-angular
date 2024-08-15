import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ComponentsModule],
  exports: [InputFieldComponent, ButtonComponent],
})
export class SharedModule {}
