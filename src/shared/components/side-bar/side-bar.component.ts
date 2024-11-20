import { Component, inject, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppStateI } from '../../../store/global.reducer';
import {
  selectLayoutCollapseBar,
  selectLayoutIsMobileDevice,
} from '../../../store/layout-reducer/layout.selectors';
import { collapseSideBar } from '../../../store/layout-reducer/layout.actions';

interface ButtonObjI {
  label: string;
  url: string;
}

interface ButtonListI extends Array<ButtonObjI> {}

@Component({
    selector: 'side-bar',
    templateUrl: './side-bar.component.html',
    styleUrl: './side-bar.component.scss',
    standalone: false
})
export class SideBarComponent {
  private store = inject(Store);
  buttonList: ButtonListI = [{ label: 'Home', url: '/home' }];
  $collapsedSideBar = this.store.selectSignal(selectLayoutCollapseBar);
  $isMobileDevice = this.store.selectSignal(selectLayoutIsMobileDevice);

  constructor(private router: Router) {
    this.onRouteChange(this.router);
  }

  onRouteChange(router: Router) {
    router.events.subscribe((val) => {
      const currentPath = window.location.pathname;
      const navButton = document.querySelector(`[data-url='${currentPath}']`);
      navButton?.classList.add('active');
    });
  }

  handleBlurSideBar() {
    if (this.$isMobileDevice()) {
      this.store.dispatch(collapseSideBar());
    }
  }

  returnButtonClass(buttonUrl: string) {
    const currentPath = window.location.pathname;
    if (buttonUrl === currentPath) {
      return 'nav-button active';
    }
    return 'nav-button';
  }

  returnAppContainerClass() {
    return `side-bar-container container m-0 ${
      this.$collapsedSideBar() ? 'collapsed' : ''
    } ${this.$isMobileDevice() ? 'mobile' : ''}`;
  }

  returnButtonTooltip(label: string, url: string) {
    const currentPath = window.location.pathname;
    if (url === currentPath) {
      return 'Você está aqui';
    }
    return `Ir para ${label}`;
  }

  handleClickNavBtn(e: MouseEvent, url?: string) {
    const element = e.target as HTMLElement;
    const buttonElement = element.parentElement as HTMLButtonElement;
    const currentPath = window.location.pathname;

    if (url && url != currentPath) {
      this.router.navigateByUrl(url);
    } else if (buttonElement?.value && buttonElement?.value != currentPath) {
      this.router.navigateByUrl(buttonElement.value);
    }
  }
}
