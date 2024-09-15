import { createReducer, on } from '@ngrx/store';
import { collapseSideBar } from './layout.actions';

export const initialState = { collapsedSideBar: false };

export const layoutReducer = createReducer(
  initialState,
  on(collapseSideBar, (state) => ({
    ...state,
    collapsedSideBar: !state.collapsedSideBar,
  }))
);
