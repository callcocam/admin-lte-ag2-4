import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuestRouterService implements CanActivate {

  constructor(private authService: AuthService, private route: Router) { } 

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    
    if(this.authService.check){
      this.route.navigate(['admin'])
      return false;
    }
    return true;
  }
 

}
