import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';


@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  private apiKey = 'API KEY';

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedRequest = request.clone({
      setParams: { access_key: this.apiKey },
    });
    return next.handle(modifiedRequest);
  }
}
