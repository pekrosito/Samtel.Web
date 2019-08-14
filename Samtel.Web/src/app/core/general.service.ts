import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { timeout } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': '123456',
    'X-System': 'Desktop'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private url = "http://localhost:2458/v1/identifications/";
  private url2 = "http://localhost:2458/v1/ocupations/";
  constructor(private http: HttpClient) { }

  getIdentifications(): Observable<any> {
    return this.http.get<any>(`${this.url + 'getIdentifications'}`, httpOptions)
      .pipe(
        timeout(3000),
        map(res => {
          return res;
        }),
        catchError(err => {
          /*if (err.name === 'TimeoutError') {
            this.fallback(data);
          }*/
          return Observable.throw(err)
        })
      );
  }

  getOcupations(): Observable<any> {
    return this.http.get<any>(`${this.url2 + 'getOcupations'}`, httpOptions)
      .pipe(
        timeout(3000),
        map(res => {
          return res;
        }),
        catchError(err => {
          /*if (err.name === 'TimeoutError') {
            this.fallback(data);
          }*/
          return Observable.throw(err)
        })
      );
  }
}
