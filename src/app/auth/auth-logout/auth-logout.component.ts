import { Component, OnInit } from '@angular/core';
import { AuthService } from '../sercices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-logout',
  templateUrl: './auth-logout.component.html',
  styleUrls: ['./auth-logout.component.css']
})
export class AuthLogoutComponent implements OnInit {

  percent: number = 0;
  redirectAfterLogout = ['/auth'];
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.logout();
  }

ngOnDestroy() {
  // Destroy NgProgressRef instance using `NgProgress` service.
  
  // DO NOT DESTROY USING `progressRef` ITSELF.  
  // this.progressRef.destroy();
}
  logout() {
    this.authService.logout();
    this.router.navigate(this.redirectAfterLogout);

}

}
