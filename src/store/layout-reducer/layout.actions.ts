import { createAction, props } from '@ngrx/store';

export const collapseSideBar = createAction(
  '[Layout] CollapseSideBar'
);
export const mobileDevice = createAction(
  '[Layout] MobileDevice',
  props<{ isMobileScreen: boolean }>()
);
