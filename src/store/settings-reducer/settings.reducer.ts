import { createReducer, on } from '@ngrx/store';
import { clearUserSettings, saveUserToken } from './settings.actions';
import { jwtDecode, JwtPayload } from 'jwt-decode';

export interface SettingsStateI {
  userSettings: {
    authToken: string | null;
    userData: UserDataJwtPayload;
  };
}

export interface UserDataJwtPayload {
  id_user_pk: number | null;
  mail: string | null;
  name: string | null;
  nickname: string | null;
  username: string | null;
}

interface FinanceJwtPayloadI extends JwtPayload {
  data: UserDataJwtPayload;
}

export const initialState: SettingsStateI = {
  userSettings: {
    authToken: null,
    userData: {
      id_user_pk: null,
      mail: null,
      name: null,
      nickname: null,
      username: null,
    },
  },
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
