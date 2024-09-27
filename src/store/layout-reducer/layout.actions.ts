import { createAction, props } from '@ngrx/store';

export const collapseSideBar = createAction(
  '[UpperBarComponent] CollapseSideBar'
);
export const mobileDevice = createAction(
  '[LayoutHandlerComponent] MobileDevice',
  props<{ isMobileScreen: boolean }>()
);
