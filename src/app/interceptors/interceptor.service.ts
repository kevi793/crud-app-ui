import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { camelCase } from 'lodash';

const camelizeKeys = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(v => camelizeKeys(v));
  } else if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [camelCase(key)]: camelizeKeys(obj[key]),
      }),
      {},
    );
  }
  return obj;
};

const hyphenizeKeys = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(v => hyphenizeKeys(v));
  } else if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [key.replace(/[A-Z]/g, m => "-" + m.toLowerCase())]: hyphenizeKeys(obj[key]),
      }),
      {},
    );
  }
  return obj;
};

@Injectable()
export class InterceptorService implements HttpInterceptor {
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
    const customReq = request.clone({
      url: environment.server + request.url,
      body: hyphenizeKeys(request.body)
    });
    return next.handle(customReq).pipe(
      filter(event => event instanceof HttpResponse),
      map((event: any) => {
        event['body'] = camelizeKeys(event['body']);
        return event;
      })
    );
  }

}
