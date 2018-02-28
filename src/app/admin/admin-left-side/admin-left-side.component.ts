import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../auth/sercices/local-storage.service';

@Component({
  selector: 'app-admin-left-side',
  templateUrl: './admin-left-side.component.html',
  styleUrls: ['./admin-left-side.component.css']
})
export class AdminLeftSideComponent implements OnInit {

  userLogado={};
  constructor(private localStorage: LocalStorageService) { }
  ngOnInit() {

  this.userLogado = this.localStorage.getObject('user')
 
  }

}
