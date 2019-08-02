import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { timeout } from 'rxjs/operators';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.url = "http://localhost:2458/v1/test/";
    }
    getSinVariable() {
        return this.http.get(`${this.url + '/metodoGetSinVariable'}`)
            .pipe(timeout(3000), map(res => {
            return res;
        }), catchError(err => {
            /*if (err.name === 'TimeoutError') {
              this.fallback(data);
            }*/
            return Observable.throw(err);
        }));
    }
};
UserService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map