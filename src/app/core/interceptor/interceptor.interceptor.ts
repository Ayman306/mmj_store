import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Retrieve your JWT token from where it's stored (e.g., localStorage)
    const jwtToken = localStorage.getItem('JWT_TOKEN') || '';

    // Check if the token exists
    if (jwtToken) {
      // Clone the request to add the new header.
      const clonedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${jwtToken}`
        }
      });
      // Pass the cloned request instead of the original request to the next handle
      return next.handle(clonedRequest);
    }
    return next.handle(request);
  }
}
