import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule, provideToastr } from 'ngx-toastr';


bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule, AppRoutingModule, ToastrModule.forRoot({
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
