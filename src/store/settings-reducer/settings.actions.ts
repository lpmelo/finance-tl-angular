import { createAction, props } from '@ngrx/store';

export const saveUserToken = createAction(
  '[UserSettings] SaveUserToken',
  props<{ token: string }>()
);

export const clearUserSettings = createAction(
  '[UserSettings] ClearUserSettings'
);
