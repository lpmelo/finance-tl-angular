import { Component, inject, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLayoutCollapseBar, selectLayoutIsMobileDevice } from '../../../store/layout-reducer/layout.selectors';
import { collapseSideBar } from '../../../store/layout-reducer/layout.actions';
import { AppStateI } from '../../../store/global.reducer';

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
        icon: 'chevron_right',
        tooltip: 'Mostrar barra lateral',
      });
    }
    return (this.collapseState = {
      icon: 'chevron_left',
      tooltip: 'Esconder barra lateral',
    });
  }
}
