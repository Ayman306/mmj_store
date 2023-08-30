import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { provideRouter } from '@angular/router';
import { App_Route } from './app/app.route';
import { ApiServiceService } from './app/shared/api/api-service.service';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(App_Route),
    ApiServiceService,
    importProvidersFrom(BrowserModule, ToastrModule.forRoot({
    timeOut: 10000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
    progressBar: true,
    closeButton: true,
    newestOnTop: true,
    tapToDismiss: true,
    autoDismiss: true,
  }),
  ),
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
  ]
})
  .catch(err => console.error(err));
[]