import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule, BrowserXhr} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { NgProgressModule } from '@ngx-progressbar/core';

import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { deLocale } from 'ngx-bootstrap/locale';

defineLocale('pt-br', deLocale); 

import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './starter/starter-control-sidebar/starter-control-sidebar.component';

import { AuthModule } from './auth/auth.module';
import { LocalStorageService } from './auth/sercices/local-storage.service';
import { AuthService } from './auth/sercices/auth.service';
import { JwtTokenService } from './auth/sercices/jwt-token.service';
import { DefaultRequestOptionsService } from './auth/sercices/default-request-options.service';
import { AuthGuardRouterService } from './auth/sercices/auth-guard-router.service';
import { AuthGuestRouterService } from './auth/sercices/auth-guest-router.service';
import { BootstrapModule } from './bootstrap/bootstrap.module';

import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MessageService} from 'primeng/components/common/messageservice';
import {GrowlModule} from 'primeng/growl';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import {ConfirmationService} from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    NgProgressModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgProgressRouterModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    AdminModule,
    AuthModule,
    BootstrapModule,
    BrowserAnimationsModule,
    GrowlModule,
    ConfirmDialogModule,
    ButtonModule,
    InputTextareaModule
  ],
  providers: [
    AuthService, 
    LocalStorageService, 
    JwtTokenService,
    DefaultRequestOptionsService ,
    AuthGuardRouterService,
    AuthGuestRouterService, 
    BsLocaleService,
    MessageService,
    ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
