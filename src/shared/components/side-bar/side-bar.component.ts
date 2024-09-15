import { Component, inject, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppStateI } from '../../../store/global.reducer';
import { selectLayoutCollapseBar } from '../../../store/layout-reducer/layout.selectors';

interface ButtonObjI {
  label: string;
  url: string;
}

interface ButtonListI extends Array<ButtonObjI> {}

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  private store = inject(Store);
  buttonList: ButtonListI = [{ label: 'Home', url: '/home' }];
  $collapsedSideBar = this.store.selectSignal(selectLayoutCollapseBar);

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

  returnButtonClass(buttonUrl: string) {
    const currentPath = window.location.pathname;
    if (buttonUrl === currentPath) {
      return 'nav-button active';
    }
    return 'nav-button';
  }

  returnAppContainerClass() {
    if (this.$collapsedSideBar()) {
      return 'app-bar-container container m-0 collapsed';
    }
    return 'app-bar-container container m-0';
  }
}
