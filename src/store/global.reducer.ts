import { combineReducers } from '@ngrx/store';
import { layoutReducer } from './layout-reducer/layout.reducer';

export const globalReducer = combineReducers({
  layout: layoutReducer,
});
