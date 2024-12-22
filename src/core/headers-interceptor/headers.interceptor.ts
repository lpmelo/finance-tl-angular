import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserToken } from '../../store/settings-reducer/settings.selectors';
import { AppStateI } from '../../store/global.reducer';
import { environment } from '../../environments/environment';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes(environment.apiBaseUrl)) {
    if (!(req.url.includes('/login') || req.url.includes('/check'))) {
      const store = inject<Store<AppStateI>>(Store);
      const userToken = store.selectSignal(selectUserToken);

      const modifiedReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${userToken()}`),
      });

      return next(modifiedReq);
    }
  }

  return next(req);
};
