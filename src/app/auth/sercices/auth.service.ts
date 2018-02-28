import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {JwtTokenService} from "./jwt-token.service";
import {LocalStorageService} from "./local-storage.service";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { RequestOptions, RequestMethod, Http } from '@angular/http';


@Injectable()
export class AuthService {

    public check: Boolean = false;
    public USER_KEY = 'user';
    public user = {
        name: ''
    };
    public baseUrl = 'http://localhost:8585/auth'
    constructor(public jwtToken: JwtTokenService, private http: HttpClient, public localStorage: LocalStorageService) {
        this.check = this.jwtToken.token ? true : false;
        let userLocalStorage = this.localStorage.getObject(this.USER_KEY);
        this.user = userLocalStorage ? userLocalStorage : {
            first_name: ''
        };
    }

    login(data: any): Observable<any> {
        return this.http.post(this.baseUrl, data)
    } 
    
    logout() {
        this.jwtToken.token = null;
        this.check = false;
        this.localStorage.remove(this.USER_KEY);
    }

    private getUser() {
      return this.http.get(`http://localhost:8585/auth/${this.localStorage.getObject(this.USER_KEY).id}`);
  }
}