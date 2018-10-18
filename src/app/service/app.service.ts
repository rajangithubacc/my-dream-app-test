import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from "../../environments/environment";
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';
import { HttpModule } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  authToken;
  options;
  constructor(
    private http: Http,
    // private userService: UserService
  ) {
  }

  SERVER_URL = environment.SERVER_URL || 'http://localhost:8000'

  createAuthenticationHeader() {
    this.loadToken()
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authToken
      })
    })
  }
  loadToken() {
    this.authToken = localStorage.getItem('token');
  }
  post(url, body, header) {
    this.createAuthenticationHeader();
    if (header == 'noHeader') {
      var headersData = {};
      headersData = {
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      };
      return this.http.post(this.SERVER_URL + url, body, headersData).pipe(map(res => res));
    } else {
      return this.http.post(this.SERVER_URL + url, body, this.options).pipe(map(res => res));
    }
  }

  get(url, headerData): Observable<any> {
    this.createAuthenticationHeader();
    var headersData = {}
    if (headerData == 'noHeader') {
      headersData = {
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      };
      return this.http.get(this.SERVER_URL + url, headersData).pipe(map(res => res));
    } else {
      return this.http.get(this.SERVER_URL + url, this.options).pipe(map(res => res));
    }
  }

}