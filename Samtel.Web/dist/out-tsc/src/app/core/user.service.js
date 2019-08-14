import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { timeout } from 'rxjs/operators';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': '123456',
        'X-System': 'Desktop'
    })
};
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.url = "http://localhost:2458/v1/client/";
    }
    /* Este era de otro servicio-----
     * getSinVariable(): Observable<any> {
      return this.http.get<any>(`${this.url + '/metodoGetSinVariable'}`, httpOptions)
        .pipe(
          timeout(3000),
          map(res => {
            return res;
          }),
          catchError(err => {
            /*if (err.name === 'TimeoutError') {
              this.fallback(data);
            }
            return Observable.throw(err)
          })
        );
    }*/
    getSinVariableDos() {
        return this.http.get(`${this.url + '/getClients'}`, httpOptions)
            .pipe(timeout(3000), map(res => {
            return res;
        }), catchError(err => {
            /*if (err.name === 'TimeoutError') {
              this.fallback(data);
            }*/
            return Observable.throw(err);
        }));
    }
    metodoPostCrear(data) {
        const url = `${this.url + 'createClient'}`;
        return this.http.post(url, data, httpOptions);
    }
    metodoPutEditar(data, id) {
        const url = `${this.url + 'editClient' + '/' + id}`;
        return this.http.put(url, data, httpOptions);
    }
    metodoPutActualizar(data) {
        const url = `${this.url + 'editClient'}`;
        return this.http.put(url, data, httpOptions);
    }
    getSinVariable() {
        return this.http.get(`${this.url + '/getClients'}`, httpOptions);
    }
};
UserService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map