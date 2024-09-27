import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectLayoutCollapseBar,
  selectLayoutIsMobileDevice,
} from '../../../store/layout-reducer/layout.selectors';
import { collapseSideBar } from '../../../store/layout-reducer/layout.actions';

@Component({
  selector: 'upper-bar',
  templateUrl: './upper-bar.component.html',
  styleUrl: './upper-bar.component.scss',
})
export class UpperBarComponent {
  private store = inject(Store);
  $collapsedSideBar = this.store.selectSignal(selectLayoutCollapseBar);
  $isMobileDevice = this.store.selectSignal(selectLayoutIsMobileDevice);

  collapseState = {
    icon: 'chevron_left',
    tooltip: 'Esconder barra lateral',
  };

  constructor() {
    this.onChangeCollapse();
  }

  onChangeCollapse() {
    this.store.select(selectLayoutCollapseBar).subscribe((collapsedSideBar) => {
      this.setCollapsedState(collapsedSideBar);
    });
    
    this.store
      .select(selectLayoutIsMobileDevice)
      .subscribe((isMobileDevice) => {
        this.setCollapsedState(isMobileDevice);
      });
  }

  logout() {
    window.location.replace('/login');
  }

  collapseBar() {
    this.store.dispatch(collapseSideBar());
  }

  setCollapsedState(collapsedSideBar: boolean) {
    if (collapsedSideBar) {
      return (this.collapseState = {
        icon: this.$isMobileDevice() ? 'menu' : 'chevron_right',
        tooltip: this.$isMobileDevice()
          ? 'Mostrar menu'
          : 'Mostrar barra lateral',
      });
    }
    return (this.collapseState = {
      icon: this.$isMobileDevice() ? 'menu' : 'chevron_left',
      tooltip: this.$isMobileDevice()
        ? 'Mostrar menu'
        : 'Esconder barra lateral',
    });
  }
}
