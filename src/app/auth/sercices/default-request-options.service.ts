import {Injectable} from '@angular/core';
import {JwtTokenService} from "./jwt-token.service";
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class DefaultRequestOptionsService {

    constructor(private jwtToken:JwtTokenService) { }

   public httpOptions;
    merge() {
        this.httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization':`Bearer ${this.jwtToken.token}`
            })
          }
       return this.httpOptions;
    }
}