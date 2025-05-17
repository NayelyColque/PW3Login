import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([{ path: '', component: LoginComponent }])
  ]
};
