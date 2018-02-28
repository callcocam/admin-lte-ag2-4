import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthComponent } from '../auth.component';
import { RegisterComponent } from '../register/register.component';
import { RecoverPasswordComponent } from '../recover-password/recover-password.component';
import { AuthenticateComponent } from '../authenticate/authenticate.component';
import { AuthGuestRouterService } from '../sercices/auth-guest-router.service';
import { AuthGuardRouterService } from '../sercices/auth-guard-router.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'auth',
        component: AuthComponent,
        children: [
          {
            path: 'login',
            component: AuthenticateComponent,
            canActivate: [AuthGuestRouterService]
          },
          {
            path: 'registre-se',
            component: RegisterComponent,
            canActivate: [AuthGuestRouterService]
          },
          {
            path: 'recuperar-senha',
            component: RecoverPasswordComponent,
            canActivate: [AuthGuestRouterService]
          },
          
          {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full',
            canActivate: [AuthGuestRouterService]
          }
        ],
        canActivate: [AuthGuestRouterService]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
