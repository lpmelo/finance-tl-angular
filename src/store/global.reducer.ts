import { combineReducers } from '@ngrx/store';
import { layoutReducer } from './layout-reducer/layout.reducer';
import { LayoutStateI } from './layout-reducer/layout.selectors';

export interface GlobalStateI {
  layout: LayoutStateI;
}
export interface AppStateI {
  global: GlobalStateI;
}

export const globalReducer = combineReducers({
  layout: layoutReducer,
});
