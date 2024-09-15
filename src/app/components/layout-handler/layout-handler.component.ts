import { Component, inject, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLayoutCollapseBar } from '../../../store/layout-reducer/layout.selectors';

@Component({
  selector: 'layout-handler',
  templateUrl: './layout-handler.component.html',
  styleUrl: './layout-handler.component.scss',
})
export class LayoutHandlerComponent {
  store = inject(Store);
  $collapseBar = this.store.selectSignal(selectLayoutCollapseBar);

  returnContainerClass() {
    if (this.$collapseBar()) {
      return 'container collapsed';
    }
    return 'container';
  }
}
