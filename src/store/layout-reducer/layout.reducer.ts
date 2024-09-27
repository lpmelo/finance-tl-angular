import { createReducer, on } from '@ngrx/store';
import { collapseSideBar, mobileDevice } from './layout.actions';

export const initialState = { collapsedSideBar: false, isMobileDevice: false };

export const layoutReducer = createReducer(
  initialState,
  on(collapseSideBar, (state) => ({
    ...state,
    collapsedSideBar: state.isMobileDevice ? false : !state.collapsedSideBar,
  })),
  on(mobileDevice, (state, { isMobileScreen }) => ({
    ...state,
    isMobileDevice: isMobileScreen,
  }))
);
