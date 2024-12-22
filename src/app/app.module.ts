import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { globalReducer } from '../store/global.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FeaturesModule } from '../features/features.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { LayoutHandlerComponent } from './components/layout-handler/layout-handler.component';
import {
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import {
  headersInterceptor,
} from '../core/headers-interceptor/headers.interceptor';

@NgModule({
  declarations: [AppComponent, LayoutHandlerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturesModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot({ global: globalReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([headersInterceptor])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
