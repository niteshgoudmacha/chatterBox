import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  url = 'https://gcrooom.herokuapp.com/';
  //'http://localhost:3000';
  constructor(private _http: HttpClient) { }
  submitRegister(body: any) {
    return this._http.post(this.url + '/api/user/register', body, {
      observe: 'body'
    });
  }

  login(body: any) {
    return this._http.post( this.url + '/api/user/login', body, {
      observe: 'body'
  });
  }

  getUser() {
    console.log('storage = ', !localStorage.getItem('token'));
    return this._http.get(this.url + '/api/user/user', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

  isAuth() {
    if(localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
