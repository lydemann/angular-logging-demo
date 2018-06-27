import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import {
  Headers,
  Http,
  RequestMethod,
  RequestOptionsArgs,
  RequestOptions,
  Request,
  Response
} from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class HttpWrapperService {
  constructor(private http: HttpClient) {}

  get(url: string, options?: any): Observable<Response> {
    console.log('option in get', options);
    return this.request('GET', url, options);
  }

  post(url: string, options?: any): Observable<Response> {
    return this.request('POST', url, options);
  }

  put(url: string, options?: any): Observable<Response> {
    return this.request('PUT', url, options);
  }

  delete(url: string, options?: any): Observable<Response> {
    return this.request('DELETE', url, options);
  }

  private request(method: string, url: string, options?: any) {
    console.log('options', options);
    return Observable.create((observer: any) => {
      this.http.request(new HttpRequest(method, url, options)).subscribe(
        (response) => {
          observer.next(response);
          observer.complete();
        },
        (error) => {
          switch (error.status) {
            case 403:
              observer.complete();
              break;
            default:
              observer.error(error);
              break;
          }
        }
      );
    });
  }
}
