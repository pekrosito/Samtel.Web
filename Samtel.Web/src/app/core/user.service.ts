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
export class UserService {

  private url = "http://localhost:2458/v1/test/";

  constructor(private http: HttpClient) { }

  getSinVariable(): Observable<any> {
    return this.http.get<any>(`${this.url + '/metodoGetSinVariable'}`, httpOptions)
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

  metodoPutActualizar(data: any): Observable<any> {
    const url = `${this.url + 'metodoPutActualizar'}`;
    return this.http.put<any>(url, data, httpOptions);
  }

}
