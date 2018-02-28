import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../sercices/auth.service';
import { NgProgress } from '@ngx-progressbar/core';
@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  authUrl = 'http://localhost:8282';
  auth = {
    email: '',
    password: ''
  };
  redirectAfterLogin = ['/admin'];
  constructor(private router: Router, private authService: AuthService, public progress: NgProgress) { }

  ngOnInit() {

  }

  login(frm) {
    this.authService.login(frm.value)
    .subscribe((response) => {      
      this.authService.check = true
      this.authService.jwtToken.token = response.result.token
      this.authService.localStorage.setObject(this.authService.USER_KEY,response.result.user)
      this.router.navigate(this.redirectAfterLogin)
    });

}

}
