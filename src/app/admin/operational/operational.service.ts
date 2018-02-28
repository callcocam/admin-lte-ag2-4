import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../auth/sercices/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { DefaultRequestOptionsService } from '../../auth/sercices/default-request-options.service';
import { Observable } from 'rxjs/Observable';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService, Message } from 'primeng/api';

@Injectable()
export class OperationalService {

  public pathUrl = 'cidades'
  msgs: Message[] = [];
  constructor(
    private localStorage:LocalStorageService, 
    private http: HttpClient,
    private requestOptions: DefaultRequestOptionsService,
    public messageService: MessageService,
    public confirmationService: ConfirmationService) { }
   

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
    console.log(`${this.localStorage.BASE_URL}admin/${this.pathUrl}/${id}`)
    return this.http.delete(`${this.localStorage.BASE_URL}admin/${this.pathUrl}/${id}`,this.requestOptions.merge())
  }

}
