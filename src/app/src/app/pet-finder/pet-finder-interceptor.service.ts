import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetFinderInterceptorService implements HttpInterceptor {

  constructor(private httpClient: HttpClient) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`AddTokenInterceptor - ${req.url}`);
    let jsonReq: HttpRequest<any> = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return next.handle(jsonReq);
  }
}
