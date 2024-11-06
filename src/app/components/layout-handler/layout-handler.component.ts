import { Component, inject, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectLayoutCollapseBar,
  selectLayoutIsMobileDevice,
} from '../../../store/layout-reducer/layout.selectors';
import { mobileDevice } from '../../../store/layout-reducer/layout.actions';

interface VerifyMobileDeviceParams {
  event?: UIEvent | undefined;
  window?: Window | undefined;
}
@Component({
  selector: 'layout-handler',
  templateUrl: './layout-handler.component.html',
  styleUrl: './layout-handler.component.scss',
})
export class LayoutHandlerComponent {
  store = inject(Store);
  $collapseBar = this.store.selectSignal(selectLayoutCollapseBar);
  $isMobileDevice = this.store.selectSignal(selectLayoutIsMobileDevice);

  constructor() {
    this.verifyIsMobileDevice({ window: window });
    this.addResizeEventListener();
  }

  verifyIsMobileDevice(params: VerifyMobileDeviceParams) {
    if (params?.event || params?.window) {
      const windowElement = params?.event?.target
        ? (params.event.target as Window)
        : params?.window
        ? params.window
        : false;

      if (windowElement) {
        const mobileSize = windowElement.innerWidth < 768;

        if (mobileSize != this.$isMobileDevice()) {
          this.store.dispatch(mobileDevice({ isMobileScreen: mobileSize }));
        }
      }
    }
  }

  addResizeEventListener() {
    window.addEventListener('resize', (e: UIEvent) => {
      this.verifyIsMobileDevice({ event: e });
    });
  }

  returnContainerClass() {
    if (this.$collapseBar() || this.$isMobileDevice()) {
      return 'container collapsed';
    }
    return 'container';
  }
}
