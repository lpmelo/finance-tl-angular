import { combineReducers } from '@ngrx/store';
import { layoutReducer } from './layout-reducer/layout.reducer';
import { LayoutStateI } from './layout-reducer/layout.selectors';
import { settingsReducer, SettingsStateI } from './settings-reducer/settings.reducer';

export interface GlobalStateI {
  layout: LayoutStateI;
  settings: SettingsStateI;
}
export interface AppStateI {
  global: GlobalStateI;
}

export const globalReducer = combineReducers({
  layout: layoutReducer,
  settings: settingsReducer,
});
