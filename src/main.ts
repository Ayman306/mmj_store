import { importProvidersFrom, inject } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { provideRouter } from '@angular/router';
import { App_Route } from './app/app.route';
import { ApiServiceService } from './app/shared/api/api-service.service';
import { CountdownConfig, CountdownGlobalConfig } from 'ngx-countdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatDialogModule } from '@angular/material/dialog';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { provideNgIconLoader } from '@ng-icons/core';

function countdownConfigFactory(): CountdownConfig {
  return { format: `mm:ss` };
}
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(App_Route),
    ApiServiceService,
    importProvidersFrom(
      BrowserAnimationsModule,
      HttpClientModule,
      BrowserModule,
      MatDialogModule,
      ModalModule.forRoot(),
      TabsModule.forRoot(),
      ToastrModule.forRoot({
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
     provideNgIconLoader((name) => {
  const http = inject(HttpClient);
  return http.get(`/assets/icons/${name}.svg`, { responseType: 'text' });
}),
    provideAnimations(),
    provideToastr(),
    { provide: CountdownGlobalConfig, useFactory: countdownConfigFactory },
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
[];
