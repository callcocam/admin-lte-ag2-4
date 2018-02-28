import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../auth/sercices/local-storage.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  userLogado={};
  constructor(private localStorage: LocalStorageService) { }
  ngOnInit() {
  this.userLogado = this.localStorage.getObject('user')
 
  }

}
