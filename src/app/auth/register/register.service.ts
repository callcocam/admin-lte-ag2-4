import { Injectable } from '@angular/core';
import { LocalStorageService } from '../sercices/local-storage.service';
import { DefaultRequestOptionsService } from '../sercices/default-request-options.service';
import { Http, RequestOptions } from '@angular/http';
import { JwtTokenService } from '../sercices/jwt-token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable()
export class RegisterService {
  public baseUrl = 'http://localhost:8585/auth-register'
  
  constructor(public jwtToken: JwtTokenService, private http: HttpClient, public localStorage: LocalStorageService) {
    let userLocalStorage = this.localStorage.getObject(this.localStorage.USER_KEY);
}

register(data: any): Observable<any> {
  return this.http.post(this.baseUrl,data.value)
}

}
