import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

export type ButtonListT = Array<ButtonI>;

interface ButtonI {
  icon: string;
  onClick: (event: MouseEvent, ...props: any) => void;
  className?: string;
  tooltip?: string;
}

@Component({
  selector: 'fab-slider',
  templateUrl: './fab-slider.component.html',
  styleUrl: './fab-slider.component.scss',
})
export class FabSliderComponent {
  @Input({ alias: 'buttonList' }) buttonList!: ButtonListT;

  handleClick(e: MouseEvent) {
    const fabContainer = document.getElementsByClassName('fab-container');
    if (fabContainer.length) {
      const element = fabContainer[0];
      if (element.classList.contains('active')) {
        element.classList.remove('active');
        element?.classList?.add('hide');
      } else {
        element?.classList?.add('active');
        element.classList.remove('hide');
      }
    }
  }

  handleBlur(e: FocusEvent) {
    const fabContainer = document.getElementsByClassName('fab-container');
    if (fabContainer.length) {
      const element = fabContainer[0];
      element.classList.add('hide');
      element?.classList?.remove('active');
    }
  }
}
