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
export class ClientService {

  private url = "http://localhost:2458/v1/client/";

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get<any>(`${this.url + 'getClients'}`, httpOptions)
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
