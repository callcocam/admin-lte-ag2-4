import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../../auth/sercices/local-storage.service';
import { Observable } from 'rxjs/Observable';
import { DefaultRequestOptionsService } from '../../auth/sercices/default-request-options.service';
import { JwtTokenService } from '../../auth/sercices/jwt-token.service';

@Injectable()
export class ControleDeEstoqueService {
 
  public pathUrl = 'products'
  constructor(private localStorage:LocalStorageService, private http: HttpClient,private requestOptions: DefaultRequestOptionsService) { }
   

  getItem(id: any): Observable<any>{
    return this.http.get(`${this.localStorage.BASE_URL}admin/${this.pathUrl}/${id}`,this.requestOptions.merge())
  }

  getList(): Observable<any>{
    return this.http.get(`${this.localStorage.BASE_URL}admin/${this.pathUrl}`,this.requestOptions.merge())
  }

  save(data: any): Observable<any>{
    return this.http.post(`${this.localStorage.BASE_URL}admin/${this.pathUrl}`, data.value,this.requestOptions.merge())
  }

  update(data: any,id:number): Observable<any>{
    return this.http.put(`${this.localStorage.BASE_URL}admin/${this.pathUrl}/${id}`, data.value,this.requestOptions.merge())
  }

  delete(id:number): Observable<any>{
    return this.http.delete(`${this.localStorage.BASE_URL}admin/${this.pathUrl}/${id}`,this.requestOptions.merge())
  }

}
