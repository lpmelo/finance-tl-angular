import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLayoutIsMobileDevice } from '../../../store/layout-reducer/layout.selectors';
import { Location } from '@angular/common';

@Component({
  selector: 'transaction-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  store = inject(Store);
  location = inject(Location);
  $isMobile = this.store.selectSignal(selectLayoutIsMobileDevice);

  handleClickCancel() {
    this.location.back();
  }
}
