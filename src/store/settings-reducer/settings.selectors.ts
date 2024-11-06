import { createSelector } from '@ngrx/store';
import { AppStateI } from '../global.reducer';

export const selectGlobalState = (state: AppStateI) => state.global;

export const selectUserData = createSelector(
  selectGlobalState,
  (globalState) => globalState.settings.userSettings.userData
);
