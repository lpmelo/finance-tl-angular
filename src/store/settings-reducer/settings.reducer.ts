import { createReducer, on } from '@ngrx/store';
import { clearUserSettings, saveUserToken } from './settings.actions';
import { jwtDecode, JwtPayload } from 'jwt-decode';

export interface SettingsStateI {
  userSettings: {
    authToken: string | null;
    userData: object | null;
  };
}

interface userDataJwtPayload {
  id_user_pk: number;
  mail: string;
  name: string;
  nickname: string;
  username: string;
}

interface FinanceJwtPayloadI extends JwtPayload {
  data: userDataJwtPayload;
}

export const initialState: SettingsStateI = {
  userSettings: { authToken: null, userData: {} },
};

export const settingsReducer = createReducer(
  initialState,
  on(saveUserToken, (state, { token }) => {
    localStorage.setItem('authToken', token);
    const jwtDecoded = jwtDecode<FinanceJwtPayloadI>(token);
    return {
      ...state,
      userSettings: {
        ...state.userSettings,
        authToken: token,
        userData: jwtDecoded.data,
      },
    };
  }),
  on(clearUserSettings, (state) => {
    localStorage.removeItem('authToken');
    return {
      ...state,
      userSettings: initialState.userSettings,
    };
  })
);
