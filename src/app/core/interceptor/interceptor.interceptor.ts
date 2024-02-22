import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './service/auth.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor(private authService:AuthService){}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const jwtToken:any = localStorage.getItem('Token') || '';
    let refreshToken = '';

    if (jwtToken) {
      refreshToken = jwtToken.refresh_token
      const clonedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${jwtToken}`
        }
      });

      return next.handle(clonedRequest).pipe(
        catchError((error) => {
          if (error.status === 403 && refreshToken) {
            // Call the refresh token API with the refresh token
            // Implement your refresh token logic here
            this.authService.refreshToken({refresh_token:refreshToken}).subscribe((res)=>{
              this.authService.setToken(res);
            })
          }
          return throwError(error);
        })
      );
    }

    return next.handle(request);
  }
}
