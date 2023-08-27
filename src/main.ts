import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

// bootstrapApplication(AppComponent, {
//     providers: [
//         importProvidersFrom(BrowserModule, AppRoutingModule, ReactiveFormsModule, MatButtonModule),
//         provideHttpClient(withInterceptorsFromDi()),
//         provideAnimations(),
//     ]
// })
//   .catch(err => console.error(err));
