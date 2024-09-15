import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateI } from '../global.reducer';

export interface LayoutStateI {
  collapsedSideBar: boolean;
}

export const selectGlobalState = (state: AppStateI) => state.global;

export const selectLayoutState = createSelector(
  selectGlobalState,
  (layoutState) => layoutState.layout
);

export const selectLayoutCollapseBar = createSelector(
  selectLayoutState,
  (layoutState: LayoutStateI) => layoutState.collapsedSideBar
);
