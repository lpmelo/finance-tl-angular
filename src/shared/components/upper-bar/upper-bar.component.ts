import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { collapseSideBar } from '../../../store/layout-reducer/layout.actions';

@Component({
  selector: 'upper-bar',
  templateUrl: './upper-bar.component.html',
  styleUrl: './upper-bar.component.scss',
})
export class UpperBarComponent {
  layout$: Observable<number>;

  constructor(private store: Store<{ layout: number }>) {
    this.layout$ = store.select('layout');
  }

  logout() {
    window.location.replace('/login');
  }

  collapseBar() {
    this.store.dispatch(collapseSideBar());
  }
}
