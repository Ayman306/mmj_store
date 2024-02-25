import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
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
    const jwtTokenObj:any =  localStorage.getItem('Token');
    const jwtToken = jwtTokenObj ? JSON.parse(jwtTokenObj) : null;
    let refreshToken = '';

    if (jwtToken?.access_token) {
      refreshToken = jwtToken.refresh_token
      let clonedRequest = request.clone({
        setHeaders: {
          Authorization: `${jwtToken.access_token}`
        }
      });

      return next.handle(clonedRequest).pipe(
        catchError((error) => {
          if (error.status === 403 ) {
            // Call the refresh token API with the refresh token
            // Implement your refresh token logic here
            this.authService.refreshToken({refresh_token:refreshToken}).subscribe((res)=>{
              this.authService.setToken(
                {
                  access_token: res.data,
                  refresh_token: refreshToken
                }
              );
               clonedRequest = request.clone({
                setHeaders: {
                  Authorization: `${res.data}`,
                },
              });
              return next.handle(request);
            })
          }
          return throwError(error);
        })
      );
    }

    return next.handle(request);
  }
}
