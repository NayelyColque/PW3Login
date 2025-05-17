import { bootstrapApplication } from '@angular/platform-browser';
import { LoginComponent } from './app/pages/login/login.component';
import { appConfig } from './app/app.config';

bootstrapApplication(LoginComponent, appConfig)
  .catch(err => console.error(err));
