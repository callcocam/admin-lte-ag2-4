import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing/auth-routing.module';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { AuthLogoutComponent } from './auth-logout/auth-logout.component';
import { RegisterService } from './register/register.service';

import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    AlertModule.forRoot()
  ],
  declarations: [
    AuthComponent,
    RegisterComponent,
    RecoverPasswordComponent,
    AuthenticateComponent,
    AuthLogoutComponent
  ],
  exports: [
    AuthComponent,
    RegisterComponent,
    RecoverPasswordComponent,
    AuthenticateComponent
  ],
  providers: [RegisterService],
})
export class AuthModule {  }
